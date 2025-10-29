# Fametonic - Urban Riders App

A modern transportation booking app built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **TypeScript**: Full type safety and better developer experience
- **Next.js 15**: Latest React framework with App Router
- **CI/CD Pipeline**: Automated testing and deployment
- **Vercel Deployment**: Fast, global CDN deployment

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd fametonic
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Build and preview production build locally

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic CI/CD:

1. **Push to main branch** - Automatically deploys to production
2. **Push to develop branch** - Runs tests and builds
3. **Pull requests** - Runs tests and linting

### Manual Deployment

#### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

#### Deploy Preview

```bash
npm run deploy:preview
```

## 🔧 CI/CD Configuration

### GitHub Actions Workflow

The project includes a comprehensive CI/CD pipeline:

- **Lint & Test**: Runs on every push and PR
- **Type Check**: Ensures TypeScript compliance
- **Build**: Creates production build
- **Deploy**: Automatically deploys to Vercel on main branch

### Required Secrets

Add these secrets to your GitHub repository:

1. `VERCEL_TOKEN` - Your Vercel API token
2. `VERCEL_ORG_ID` - Your Vercel organization ID
3. `VERCEL_PROJECT_ID` - Your Vercel project ID

### Getting Vercel Credentials

1. **Vercel Token**:

   - Go to [Vercel Dashboard](https://vercel.com/account/tokens)
   - Create a new token

2. **Organization ID**:

   - Go to [Vercel Settings](https://vercel.com/account)
   - Copy your organization ID

3. **Project ID**:
   - Create a new project in Vercel
   - Copy the project ID from the project settings

## 📁 Project Structure

```
fametonic/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   └── Assets/               # Static assets
├── public/                    # Public assets
├── vercel.json               # Vercel configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 Styling

This project uses:

- **Tailwind CSS** for utility-first styling
- **Custom CSS** for specific design requirements
- **Responsive design** for all screen sizes

## 🔍 Code Quality

- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** for code formatting (recommended)
- **Husky** for git hooks (optional)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [GitHub Issues](https://github.com/your-username/fametonic/issues)
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy coding! 🚀**
