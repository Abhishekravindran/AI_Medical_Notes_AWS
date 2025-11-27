# 🚀 IdeaGen Pro - AI Business Idea Generator

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--5--nano-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)

> **Harness the power of AI to discover innovative business opportunities tailored for the AI agent economy**

IdeaGen Pro is a premium SaaS platform that generates unique, AI-powered business ideas specifically focused on the emerging AI agent market. Built with modern web technologies and featuring subscription-based access control.

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Generation**: Leverages OpenAI's GPT-5-nano for creative business idea generation
- **Real-time Streaming**: Server-sent events for live idea generation experience
- **AI Agent Focus**: Specialized prompts for AI agent economy business opportunities
- **Rich Formatting**: Markdown rendering with GitHub Flavored Markdown support

### 🔐 Authentication & Security
- **Clerk Integration**: Seamless user authentication and management
- **JWT Protection**: Secure API endpoints with token-based authentication
- **User Tracking**: Individual user identification for personalized experiences
- **Session Management**: Persistent login states across sessions

### 💳 Subscription Management
- **Premium Gating**: Content protection behind subscription paywall
- **Pricing Table**: Integrated Clerk pricing components
- **$10/month Model**: Clear subscription pricing structure
- **Free Trial Access**: Onboarding flow for new users

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic theme switching
- **Gradient Aesthetics**: Beautiful blue-to-indigo color schemes
- **Loading States**: Smooth user experience with proper feedback
- **Backdrop Blur**: Modern glassmorphism design elements

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6 (Pages Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Authentication**: Clerk Next.js SDK
- **Markdown**: React Markdown with GFM support
- **Streaming**: Microsoft Fetch Event Source

### Backend
- **API**: FastAPI (Python)
- **Authentication**: FastAPI Clerk Auth
- **AI Integration**: OpenAI Python SDK
- **Streaming**: Server-Sent Events (SSE)

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm
- **Build Tool**: Next.js built-in bundler

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- OpenAI API key
- Clerk account and API keys

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ideagen-pro.git
cd ideagen-pro
```

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

Add your environment variables to `.env.local`:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 3. Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
export OPENAI_API_KEY=your_openai_api_key
export CLERK_JWKS_URL=your_clerk_jwks_url
```

### 4. Run the Application
```bash
# Start the frontend (development)
npm run dev

# Start the backend API (in a separate terminal)
cd api
uvicorn index:app --reload --port 8000
```

Visit `http://localhost:3000` to see the application in action!

## 📁 Project Structure

```
saas/
├── 📁 api/                    # FastAPI backend
│   └── index.py              # Main API endpoints
├── 📁 pages/                 # Next.js pages
│   ├── _app.tsx              # App wrapper with Clerk
│   ├── _document.tsx         # HTML document structure
│   ├── index.tsx             # Landing page
│   └── product.tsx           # Main app (protected)
├── 📁 public/                # Static assets
├── 📁 styles/                # Global CSS styles
├── package.json              # Node.js dependencies
├── requirements.txt          # Python dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🔧 Configuration

### Clerk Setup
1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Configure your authentication settings
3. Set up subscription plans in Clerk Dashboard
4. Add your API keys to environment variables

### OpenAI Setup
1. Get your API key from [OpenAI Platform](https://platform.openai.com)
2. Ensure you have access to GPT-5-nano model
3. Set up billing and usage limits as needed

### Subscription Configuration
The app uses Clerk's subscription system with a `premium_subscription` plan. Configure this in your Clerk Dashboard under "Subscriptions".

## 🎯 Usage

### For End Users
1. **Sign Up**: Create an account using Clerk authentication
2. **Subscribe**: Choose the $10/month premium plan
3. **Generate Ideas**: Access the AI-powered idea generator
4. **Explore**: Get unlimited business ideas for AI agents

### For Developers
1. **Customize Prompts**: Modify the AI prompts in `api/index.py`
2. **Styling**: Update Tailwind classes for design changes
3. **Features**: Add new pages or components as needed
4. **Analytics**: Integrate user tracking and analytics

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Build the application
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Backend (Railway/Heroku)
```bash
# Ensure requirements.txt is up to date
pip freeze > requirements.txt

# Deploy using your preferred platform
# Railway: Connect GitHub repo
# Heroku: git push heroku main
```

### Environment Variables
Make sure to set all required environment variables in your deployment platform:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `OPENAI_API_KEY`
- `CLERK_JWKS_URL`

## 📊 Features Roadmap

### Planned Features
- [ ] **Idea History**: Save and revisit generated ideas
- [ ] **Categories**: Filter ideas by industry or type
- [ ] **Collaboration**: Share ideas with team members
- [ ] **Export Options**: PDF/Word export functionality
- [ ] **Analytics Dashboard**: Track usage and popular ideas
- [ ] **API Access**: RESTful API for third-party integrations

### Potential Enhancements
- [ ] **Multiple AI Models**: Support for different AI providers
- [ ] **Custom Prompts**: User-defined idea generation prompts
- [ ] **Idea Refinement**: Iterative improvement of generated ideas
- [ ] **Market Research**: Integration with market data APIs
- [ ] **Business Plan Generator**: Extended functionality beyond ideas

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain consistent code formatting
- Add appropriate error handling
- Write clear commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing powerful AI models
- **Clerk** for seamless authentication and subscription management
- **Vercel** for Next.js framework and hosting platform
- **Tailwind CSS** for utility-first styling approach
- **FastAPI** for high-performance Python API framework

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join our GitHub Discussions for questions
- **Email**: contact@ideagenpro.com (if applicable)

---

<div align="center">

**for the AI Agent Economy**

[Live Demo](https://saas-rbelo0tia-abhisheks-projects-1afd169f.vercel.app/) • [Documentation](https://docs.your-site.com) • [Support](mailto:abhishekravindran07@gmail.com)

</div>