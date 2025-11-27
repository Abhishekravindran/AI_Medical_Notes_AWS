# 🏥 MediNotes Pro

> AI-powered medical consultation assistant for healthcare professionals

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--5--nano-412991?style=flat-square&logo=openai)](https://openai.com/)

MediNotes Pro transforms raw consultation notes into professional medical summaries, action items, and patient communications using advanced AI technology.

## ✨ Features

### Core Functionality
- **Professional Summaries** - Generate comprehensive medical record summaries
- **Action Items** - Extract follow-up tasks and treatment plans automatically  
- **Patient Communication** - Create clear, patient-friendly explanations
- **Real-time Processing** - Instant AI-powered analysis with streaming results

### Security & Compliance
- **HIPAA Compliant** - Full healthcare data protection standards
- **Secure Authentication** - Clerk-powered user management with JWT protection
- **Data Encryption** - End-to-end encryption for all medical data
- **Audit Trails** - Complete logging for compliance requirements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+ for backend API
- OpenAI API key
- Clerk account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishekravindran/medinotes-pro.git
   cd medinotes-pro
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment setup**
   
   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

   Set backend environment variables:
   ```bash
   export OPENAI_API_KEY=your_openai_api_key
   export CLERK_JWKS_URL=your_clerk_jwks_url
   ```

5. **Run the application**
   
   Start frontend (terminal 1):
   ```bash
   npm run dev
   ```
   
   Start backend API (terminal 2):
   ```bash
   cd api
   uvicorn index:app --reload --port 8000
   ```

6. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
medinotes-pro/
├── pages/                  # Next.js pages
│   ├── _app.tsx           # App wrapper with Clerk
│   ├── index.tsx          # Landing page
│   └── product.tsx        # Main consultation assistant
├── styles/                # CSS styles
│   └── globals.css        # Global styles and components
├── api/                   # FastAPI backend
│   └── index.py          # Main API endpoints
├── public/               # Static assets
├── package.json          # Node.js dependencies
├── requirements.txt      # Python dependencies
└── README.md            # This file
```

## 🛠️ Technology Stack

**Frontend**
- Next.js 15.5.6 with Pages Router
- TypeScript 5.0
- Tailwind CSS 4.0
- Clerk authentication
- React Markdown

**Backend**
- FastAPI (Python)
- OpenAI GPT-5-nano
- Server-Sent Events (SSE)
- FastAPI Clerk Auth

## 💰 Pricing

**Healthcare Professional Plan - $29/month**
- ✅ Unlimited consultation processing
- ✅ HIPAA-compliant security
- ✅ Priority AI processing
- ✅ 24/7 professional support

## 🔒 Security

- **HIPAA Compliance** - Full adherence to healthcare data protection
- **Data Encryption** - AES-256 encryption at rest and in transit
- **Access Controls** - Role-based access with medical staff permissions
- **Audit Logging** - Complete tracking of all medical data access

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
npx vercel --prod
```

### Backend (Railway/Heroku)
```bash
pip freeze > requirements.txt
# Deploy using your preferred platform
```

### Environment Variables
Set these in your production environment:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `OPENAI_API_KEY`
- `CLERK_JWKS_URL`

## 📈 Roadmap

- [ ] EMR Integration (Epic, Cerner)
- [ ] Voice-to-Text transcription
- [ ] Multi-language support
- [ ] Specialty templates
- [ ] Mobile applications
- [ ] Analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/medical-enhancement`
3. Commit changes: `git commit -m 'Add medical feature'`
4. Push to branch: `git push origin feature/medical-enhancement`
5. Open a Pull Request

### Development Guidelines
- Follow HIPAA compliance in all code changes
- Maintain medical terminology accuracy
- Include proper error handling for patient data
- Write comprehensive tests for medical workflows

## 📞 Support

- **Email**: abhishekravindran07@gmail.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/medinotes-pro/issues)

## 📜 License

This project is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.

## 🏆 Benefits

**For Healthcare Professionals**
- ⚡ Save 70% documentation time
- 📋 Improve record quality and consistency
- 👥 More time for patient care
- 🔒 Built-in compliance and audit trails

**For Medical Practices**
- 📈 Scalable solution that grows with your practice
- 🔧 Easy integration with existing workflows
- 💡 Stay ahead with cutting-edge medical AI
- 🎯 Clear ROI through operational efficiency

---

**LLMS for Healthcare Professionals**

[demo](https://medicalsaas-pibq6t0af-abhisheks-projects-1afd169f.vercel.app/)  
[Contact Sales](mailto:abhishekravindran07@gmail.com)
