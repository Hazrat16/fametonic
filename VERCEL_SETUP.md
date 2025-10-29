# 🔑 Vercel Credentials Setup Guide

This guide will walk you through getting all the required Vercel credentials for your CI/CD pipeline.

## 📋 Required Credentials

You need these three credentials for GitHub Actions:

- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

---

## 🚀 Step 1: Get VERCEL_TOKEN

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**

   - Visit: https://vercel.com/account/tokens
   - Or: Dashboard → Settings → Tokens

2. **Create New Token**

   - Click "Create Token"
   - Give it a name: `fametonic-ci-cd`
   - Set expiration: `No Expiration` (or choose your preference)
   - Click "Create"

3. **Copy the Token**
   - ⚠️ **Important**: Copy the token immediately - you won't be able to see it again!
   - Save it securely (password manager recommended)

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# This will open browser for authentication
```

---

## 🏢 Step 2: Get VERCEL_ORG_ID

### Method 1: Via Vercel Dashboard

1. **Go to Account Settings**

   - Visit: https://vercel.com/account
   - Or: Dashboard → Settings → General

2. **Find Organization ID**
   - Look for "Personal Account" section
   - Copy the "Account ID" (this is your ORG_ID)
   - Format: `team_xxxxxxxxxxxxxxxx`

### Method 2: Via Vercel CLI

```bash
# Get organization info
vercel teams list

# Or get current user info
vercel whoami
```

### Method 3: Via API

```bash
# Using curl (replace YOUR_TOKEN with your actual token)
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.vercel.com/v1/user
```

---

## 📁 Step 3: Get VERCEL_PROJECT_ID

### Method 1: Create New Project (Recommended)

1. **Go to Vercel Dashboard**

   - Visit: https://vercel.com/new
   - Or: Dashboard → "Add New..." → Project

2. **Import Your Repository**

   - Connect your GitHub account
   - Select your `fametonic` repository
   - Click "Import"

3. **Configure Project**

   - Project Name: `fametonic` (or your preferred name)
   - Framework Preset: `Next.js`
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (should auto-detect)
   - Output Directory: `.next` (should auto-detect)

4. **Get Project ID**
   - After creation, go to Project Settings
   - Look for "Project ID" in the General tab
   - Copy the ID (format: `prj_xxxxxxxxxxxxxxxx`)

### Method 2: Via Vercel CLI

```bash
# List all projects
vercel projects list

# Get specific project info
vercel projects inspect PROJECT_NAME
```

### Method 3: Via API

```bash
# List projects (replace YOUR_TOKEN and ORG_ID)
curl -H "Authorization: Bearer YOUR_TOKEN" \
     "https://api.vercel.com/v1/projects?teamId=ORG_ID"
```

---

## 🔐 Step 4: Add Secrets to GitHub

1. **Go to Your GitHub Repository**

   - Navigate to: `https://github.com/YOUR_USERNAME/fametonic`

2. **Access Repository Settings**

   - Click "Settings" tab
   - Go to "Secrets and variables" → "Actions"

3. **Add Repository Secrets**

   - Click "New repository secret"
   - Add each secret:

   **Secret 1:**

   - Name: `VERCEL_TOKEN`
   - Value: `[Your Vercel API token]`

   **Secret 2:**

   - Name: `VERCEL_ORG_ID`
   - Value: `[Your Vercel organization ID]`

   **Secret 3:**

   - Name: `VERCEL_PROJECT_ID`
   - Value: `[Your Vercel project ID]`

4. **Verify Secrets**
   - You should see all three secrets listed
   - Values are hidden for security

---

## 🧪 Step 5: Test Your Setup

### Test Locally

```bash
# Test build
npm run build

# Test deployment (optional)
vercel --prod
```

### Test CI/CD Pipeline

1. **Make a small change**

   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```

2. **Check GitHub Actions**

   - Go to your repository
   - Click "Actions" tab
   - Watch the workflow run

3. **Verify Deployment**
   - Check Vercel dashboard for new deployment
   - Visit your live URL

---

## 🔍 Troubleshooting

### Common Issues:

**❌ "Invalid token"**

- Check if token is copied correctly
- Ensure token hasn't expired
- Verify token has proper permissions

**❌ "Organization not found"**

- Double-check ORG_ID format
- Ensure you're using the correct organization
- Try personal account ID instead of team ID

**❌ "Project not found"**

- Verify PROJECT_ID is correct
- Ensure project exists in Vercel
- Check if project is in the right organization

**❌ "Build failed"**

- Check your `package.json` scripts
- Ensure all dependencies are installed
- Verify Next.js configuration

### Getting Help:

1. **Vercel Documentation**: https://vercel.com/docs
2. **GitHub Actions**: https://docs.github.com/en/actions
3. **Check Logs**: GitHub Actions → Your workflow → View logs

---

## 📝 Quick Reference

```bash
# Your credentials should look like:
VERCEL_TOKEN=vercel_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VERCEL_ORG_ID=team_xxxxxxxxxxxxxxxx
VERCEL_PROJECT_ID=prj_xxxxxxxxxxxxxxxx
```

**Remember:**

- Keep these credentials secure
- Never commit them to your repository
- Use GitHub Secrets for CI/CD
- Rotate tokens periodically for security

---

## ✅ Verification Checklist

- [ ] VERCEL_TOKEN created and copied
- [ ] VERCEL_ORG_ID found and copied
- [ ] VERCEL_PROJECT_ID obtained
- [ ] All secrets added to GitHub repository
- [ ] CI/CD pipeline tested
- [ ] Deployment successful

**🎉 You're all set! Your CI/CD pipeline should now work automatically.**
