#!/bin/bash

# Vercel Credentials Helper Script
# This script helps you get Vercel credentials for CI/CD

echo "🔑 Vercel Credentials Helper"
echo "=========================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed"
fi

echo "📋 Getting Vercel Credentials..."
echo ""

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    echo "   vercel login"
    echo ""
    echo "This will open your browser for authentication."
    read -p "Press Enter after you've logged in..."
fi

echo "🏢 Getting Organization ID..."
ORG_ID=$(vercel teams list --json | jq -r '.[0].id' 2>/dev/null)
if [ -z "$ORG_ID" ]; then
    echo "❌ Could not get organization ID automatically"
    echo "Please get it manually from: https://vercel.com/account"
else
    echo "✅ Organization ID: $ORG_ID"
fi

echo ""
echo "📁 Getting Projects..."
echo "Available projects:"
vercel projects list

echo ""
echo "🔑 Getting API Token..."
echo "Please get your API token from: https://vercel.com/account/tokens"
echo ""

echo "📝 Summary:"
echo "==========="
echo "1. VERCEL_TOKEN: Get from https://vercel.com/account/tokens"
echo "2. VERCEL_ORG_ID: $ORG_ID"
echo "3. VERCEL_PROJECT_ID: Choose from projects above"
echo ""

echo "🔐 Add these to GitHub Secrets:"
echo "==============================="
echo "Go to: https://github.com/YOUR_USERNAME/fametonic/settings/secrets/actions"
echo ""
echo "Add these secrets:"
echo "- VERCEL_TOKEN: [Your token from step 1]"
echo "- VERCEL_ORG_ID: $ORG_ID"
echo "- VERCEL_PROJECT_ID: [Your project ID]"
echo ""

echo "🧪 Test your setup:"
echo "==================="
echo "git add ."
echo "git commit -m 'Add CI/CD configuration'"
echo "git push origin main"
echo ""

echo "✅ Setup complete! Check GitHub Actions for deployment status."
