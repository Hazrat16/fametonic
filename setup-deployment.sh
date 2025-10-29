#!/bin/bash

# Fametonic Deployment Guide Script
# This script helps you set up CI/CD and deploy to Vercel

echo "🚀 Fametonic CI/CD Setup Guide"
echo "================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run: git init"
    exit 1
fi

echo "✅ Git repository found"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    exit 1
fi

echo "✅ package.json found"

# Check if GitHub Actions workflow exists
if [ ! -f ".github/workflows/ci-cd.yml" ]; then
    echo "❌ GitHub Actions workflow not found"
    echo "Please ensure .github/workflows/ci-cd.yml exists"
    exit 1
fi

echo "✅ GitHub Actions workflow found"

# Check if vercel.json exists
if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json not found"
    echo "Please ensure vercel.json exists"
    exit 1
fi

echo "✅ Vercel configuration found"

echo ""
echo "📋 Next Steps:"
echo "=============="
echo ""
echo "1. 🔑 Get Vercel Credentials:"
echo "   - Go to https://vercel.com/account/tokens"
echo "   - Create a new token (copy this as VERCEL_TOKEN)"
echo "   - Go to https://vercel.com/account"
echo "   - Copy your organization ID (VERCEL_ORG_ID)"
echo "   - Create a new project in Vercel"
echo "   - Copy the project ID (VERCEL_PROJECT_ID)"
echo ""
echo "2. 🔐 Add GitHub Secrets:"
echo "   - Go to your GitHub repository"
echo "   - Navigate to Settings > Secrets and variables > Actions"
echo "   - Add these secrets:"
echo "     - VERCEL_TOKEN: Your Vercel API token"
echo "     - VERCEL_ORG_ID: Your Vercel organization ID"
echo "     - VERCEL_PROJECT_ID: Your Vercel project ID"
echo ""
echo "3. 📤 Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Add CI/CD configuration'"
echo "   git push origin main"
echo ""
echo "4. 🚀 Automatic Deployment:"
echo "   - Push to 'main' branch triggers production deployment"
echo "   - Push to 'develop' branch runs tests only"
echo "   - Pull requests run tests and linting"
echo ""
echo "5. 🧪 Test Locally:"
echo "   npm run build"
echo "   npm run type-check"
echo "   npm run lint"
echo ""
echo "6. 🌐 Manual Deployment (Optional):"
echo "   npm install -g vercel"
echo "   vercel login"
echo "   npm run deploy"
echo ""
echo "✅ Setup complete! Your CI/CD pipeline is ready."
echo ""
echo "📚 For more information, check the README.md file"
