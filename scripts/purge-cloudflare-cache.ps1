# Cloudflare Cache Purge Script (PowerShell)
# 
# This script purges the Cloudflare cache after a successful deployment
# to ensure users always get the latest version of the site.
# 
# Usage:
# 1. Set environment variables: $env:CF_ZONE_ID, $env:CF_API_TOKEN
# 2. Run: .\scripts\purge-cloudflare-cache.ps1
# 
# Or use with specific URLs:
# .\scripts\purge-cloudflare-cache.ps1 -Urls @("https://yourdomain.com", "https://yourdomain.com/about")

param(
    [string[]]$Urls = @(),
    [string]$Domain = "westernjewellers.lk"
)

# Configuration
$ZONE_ID = $env:CF_ZONE_ID
$API_TOKEN = $env:CF_API_TOKEN

# Default URLs to purge
$DEFAULT_URLS = @(
    "https://$Domain/",
    "https://$Domain/index.html",
    "https://$Domain/assets/*",
    "https://$Domain/src/*"
)

function Invoke-CloudflarePurge {
    param(
        [string[]]$UrlsToPurge
    )
    
    # Validate environment variables
    if (-not $ZONE_ID -or -not $API_TOKEN) {
        Write-Host "❌ Error: Missing required environment variables" -ForegroundColor Red
        Write-Host "Please set CF_ZONE_ID and CF_API_TOKEN" -ForegroundColor Red
        Write-Host ""
        Write-Host "Example:" -ForegroundColor Yellow
        Write-Host "`$env:CF_ZONE_ID = 'your-zone-id'" -ForegroundColor Yellow
        Write-Host "`$env:CF_API_TOKEN = 'your-api-token'" -ForegroundColor Yellow
        exit 1
    }

    Write-Host "🚀 Starting Cloudflare cache purge..." -ForegroundColor Green
    Write-Host "📍 Zone ID: $ZONE_ID" -ForegroundColor Cyan
    Write-Host "🌐 URLs to purge: $($UrlsToPurge.Count)" -ForegroundColor Cyan
    
    foreach ($url in $UrlsToPurge) {
        Write-Host "   - $url" -ForegroundColor Gray
    }
    
    # Prepare the request body
    $body = @{
        files = $UrlsToPurge
    } | ConvertTo-Json
    
    # Prepare headers
    $headers = @{
        "Authorization" = "Bearer $API_TOKEN"
        "Content-Type" = "application/json"
    }
    
    try {
        # Make the API request
        $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" `
                                      -Method POST `
                                      -Headers $headers `
                                      -Body $body
        
        if ($response.success) {
            Write-Host "✅ Cache purge successful!" -ForegroundColor Green
            Write-Host "📊 Purge ID: $($response.result.id)" -ForegroundColor Cyan
            Write-Host "🎉 Users will now receive the latest version of your site" -ForegroundColor Green
        } else {
            Write-Host "❌ Cache purge failed:" -ForegroundColor Red
            Write-Host ($response.errors | ConvertTo-Json) -ForegroundColor Red
            exit 1
        }
        
    } catch {
        Write-Host "❌ Cache purge failed: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
}

# Use custom URLs if provided, otherwise use defaults
if ($Urls.Count -gt 0) {
    Write-Host "🎯 Using custom URLs from parameters" -ForegroundColor Yellow
    Invoke-CloudflarePurge -UrlsToPurge $Urls
} else {
    Write-Host "📋 Using default URL patterns" -ForegroundColor Yellow
    Invoke-CloudflarePurge -UrlsToPurge $DEFAULT_URLS
}