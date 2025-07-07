# 🚀 Deployment & Cache Management Guide

This guide explains how to prevent caching issues and ensure users always see the latest version of your site after deployment.

## 🎯 Problem Solved

- **Cache Busting**: Automatic versioning prevents browsers from serving stale content
- **Fresh Assets**: Every build generates unique asset filenames with timestamps
- **CDN Purging**: Automated Cloudflare cache clearing after deployments
- **No Manual Refresh**: Users automatically get the latest version

## 🛠️ Implementation Details

### 1. HTML Cache Control

The `index.html` now includes aggressive no-cache headers:

```html
<!-- Prevents browser caching of the main HTML file -->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<!-- Build version tracking -->
<meta name="build-version" content="__BUILD_VERSION__" />
<meta name="build-timestamp" content="__BUILD_TIMESTAMP__" />
```

### 2. Asset Versioning

Vite configuration automatically adds timestamps and hashes to all assets:

```javascript
// Generated filenames include build version and hash
entryFileNames: `assets/[name]-[hash]-${buildVersion}.js`
chunkFileNames: `assets/[name]-[hash]-${buildVersion}.js`
assetFileNames: `assets/[name]-[hash]-${buildVersion}.[ext]`
```

### 3. Build-Time Injection

Build version and timestamp are automatically injected during the build process:

- `__BUILD_VERSION__` → Unix timestamp (e.g., `1703123456789`)
- `__BUILD_TIMESTAMP__` → ISO string (e.g., `2023-12-20T15:30:56.789Z`)

## 📦 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Production Build
```bash
npm run build                # Standard build
npm run build:production     # Build + auto cache purge
npm run deploy              # Build + cache purge (alias)
npm run deploy:verify       # Build + local preview
```

### Cache Management
```bash
npm run purge:cache         # Purge Cloudflare cache (Node.js)
npm run purge:cache:ps      # Purge Cloudflare cache (PowerShell)
```

## 🌐 Cloudflare Setup

### 1. Get Your Credentials

1. **Zone ID**: Found in Cloudflare Dashboard → Your Domain → Overview (right sidebar)
2. **API Token**: Cloudflare Dashboard → My Profile → API Tokens → Create Token
   - Use "Custom token" template
   - Permissions: `Zone:Zone:Read`, `Zone:Cache Purge:Edit`
   - Zone Resources: Include your specific zone

### 2. Set Environment Variables

#### Windows (PowerShell)
```powershell
$env:CF_ZONE_ID = "your-zone-id-here"
$env:CF_API_TOKEN = "your-api-token-here"
$env:CF_DOMAIN = "westernjewellers.lk"  # Optional, defaults to westernjewellers.lk
```

#### Windows (Command Prompt)
```cmd
set CF_ZONE_ID=your-zone-id-here
set CF_API_TOKEN=your-api-token-here
set CF_DOMAIN=westernjewellers.lk
```

#### Linux/macOS
```bash
export CF_ZONE_ID="your-zone-id-here"
export CF_API_TOKEN="your-api-token-here"
export CF_DOMAIN="westernjewellers.lk"
```

### 3. Test Cache Purging

```bash
# Test with default URLs
npm run purge:cache

# Test with specific URLs
node scripts/purge-cloudflare-cache.js https://yourdomain.com https://yourdomain.com/about
```

## 🔄 Deployment Workflow

### Recommended Process

1. **Development**: Make your changes
2. **Test Locally**: `npm run dev`
3. **Build & Deploy**: `npm run deploy`
4. **Verify**: Check your live site

### CI/CD Integration

For automated deployments, add environment variables to your CI/CD platform:

```yaml
# Example GitHub Actions
env:
  CF_ZONE_ID: ${{ secrets.CF_ZONE_ID }}
  CF_API_TOKEN: ${{ secrets.CF_API_TOKEN }}
  CF_DOMAIN: ${{ secrets.CF_DOMAIN }}

steps:
  - name: Build and Deploy
    run: |
      npm ci
      npm run build:production
```

## 🔍 Troubleshooting

### Cache Still Not Clearing?

1. **Check Environment Variables**:
   ```bash
   echo $CF_ZONE_ID
   echo $CF_API_TOKEN
   ```

2. **Verify API Token Permissions**:
   - Zone:Zone:Read
   - Zone:Cache Purge:Edit
   - Correct zone selected

3. **Manual Cache Purge**:
   - Cloudflare Dashboard → Caching → Purge Everything

4. **Check Build Version**:
   - View page source and look for `build-version` meta tag
   - Should change with each build

### Browser Still Showing Old Content?

1. **Hard Refresh**: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear Browser Cache**: Settings → Privacy → Clear browsing data
3. **Incognito/Private Mode**: Test in private browsing
4. **Check Network Tab**: Verify new asset URLs are being loaded

### Build Issues?

1. **Node.js Version**: Ensure you're using Node.js 16+
2. **Dependencies**: Run `npm ci` to ensure clean install
3. **TypeScript Errors**: Run `npm run lint` to check for issues

## 📊 Monitoring

### Verify Cache Busting Works

1. **Build Version Check**:
   ```bash
   curl -s https://yourdomain.com | grep "build-version"
   ```

2. **Asset URLs Check**:
   - View page source
   - Look for timestamped asset URLs
   - Example: `assets/main-abc123-1703123456789.js`

3. **Cache Headers Check**:
   ```bash
   curl -I https://yourdomain.com
   ```
   Should show: `Cache-Control: no-cache, no-store, must-revalidate`

## 🎉 Success Indicators

✅ **Build version changes** with each deployment  
✅ **Asset URLs include timestamps** and hashes  
✅ **Cache purge succeeds** without errors  
✅ **Users see updates immediately** without manual refresh  
✅ **No 304 responses** for the main HTML file  

## 🆘 Support

If you encounter issues:

1. Check the console output during build/deploy
2. Verify all environment variables are set correctly
3. Test cache purging manually with the provided scripts
4. Use browser developer tools to inspect network requests

---

**Note**: This setup is specifically optimized for Cloudflare Pages hosting. For other CDN providers, you'll need to modify the cache purging scripts accordingly.