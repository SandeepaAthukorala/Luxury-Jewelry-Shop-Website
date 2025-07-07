#!/usr/bin/env node

/**
 * Cloudflare Cache Purge Script
 * 
 * This script purges the Cloudflare cache after a successful deployment
 * to ensure users always get the latest version of the site.
 * 
 * Usage:
 * 1. Set environment variables: CF_ZONE_ID, CF_API_TOKEN
 * 2. Run: node scripts/purge-cloudflare-cache.js
 * 
 * Or use with specific URLs:
 * node scripts/purge-cloudflare-cache.js https://yourdomain.com https://yourdomain.com/about
 */

const https = require('https');
const { URL } = require('url');

// Configuration
const ZONE_ID = process.env.CF_ZONE_ID;
const API_TOKEN = process.env.CF_API_TOKEN;
const DOMAIN = process.env.CF_DOMAIN || 'westernjewellers.lk';

// Default URLs to purge (can be overridden by command line args)
const DEFAULT_URLS = [
  `https://${DOMAIN}/`,
  `https://${DOMAIN}/index.html`,
  `https://${DOMAIN}/assets/*`,
  `https://${DOMAIN}/src/*`
];

function makeCloudflareRequest(data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: 'api.cloudflare.com',
      port: 443,
      path: `/client/v4/zones/${ZONE_ID}/purge_cache`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(responseData);
          if (response.success) {
            resolve(response);
          } else {
            reject(new Error(`Cloudflare API Error: ${JSON.stringify(response.errors)}`));
          }
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request failed: ${error.message}`));
    });

    req.write(postData);
    req.end();
  });
}

async function purgeCache(urls = DEFAULT_URLS) {
  // Validate environment variables
  if (!ZONE_ID || !API_TOKEN) {
    console.error('❌ Error: Missing required environment variables');
    console.error('Please set CF_ZONE_ID and CF_API_TOKEN');
    console.error('\nExample:');
    console.error('export CF_ZONE_ID="your-zone-id"');
    console.error('export CF_API_TOKEN="your-api-token"');
    process.exit(1);
  }

  console.log('🚀 Starting Cloudflare cache purge...');
  console.log(`📍 Zone ID: ${ZONE_ID}`);
  console.log(`🌐 URLs to purge: ${urls.length}`);
  
  urls.forEach(url => console.log(`   - ${url}`));
  
  try {
    const response = await makeCloudflareRequest({
      files: urls
    });
    
    console.log('✅ Cache purge successful!');
    console.log(`📊 Purge ID: ${response.result.id}`);
    console.log('🎉 Users will now receive the latest version of your site');
    
  } catch (error) {
    console.error('❌ Cache purge failed:', error.message);
    process.exit(1);
  }
}

// Handle command line arguments
const customUrls = process.argv.slice(2);
if (customUrls.length > 0) {
  console.log('🎯 Using custom URLs from command line arguments');
  purgeCache(customUrls);
} else {
  console.log('📋 Using default URL patterns');
  purgeCache();
}

// Export for use in other scripts
module.exports = { purgeCache };