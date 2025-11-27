"use client"

import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="min-h-screen bg-pattern bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              MediNotes Pro
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/product" className="btn-primary">
                Launch App
              </Link>
              <UserButton showName={true} />
            </SignedIn>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 leading-tight">
            Transform Your Medical Consultations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered assistant that generates professional summaries, action items, and patient communications from your consultation notes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary text-lg py-4 px-8">
                  Start Free Trial
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/product" className="btn-primary text-lg py-4 px-8">
                Open Dashboard
              </Link>
            </SignedIn>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="card text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Professional Summaries
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Generate comprehensive medical record summaries from your consultation notes
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Action Items
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Automatically extract follow-up tasks and treatment plans
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Patient Communication
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create clear, patient-friendly explanations and instructions
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-md mx-auto mb-20">
          <div className="card text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Healthcare Professional Plan
            </h3>
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-blue-600">$29</span>
              <span className="text-lg text-gray-600 ml-2">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Unlimited consultation processing</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700 dark:text-gray-300">HIPAA-compliant security</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Priority AI processing</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700 dark:text-gray-300">24/7 professional support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Indicators */}
        <div className="text-center py-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Built with healthcare compliance standards
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <span className="font-semibold">HIPAA Compliant</span>
            <span className="font-semibold">SOC 2 Ready</span>
            <span className="font-semibold">ISO 27001 Ready</span>
            <span className="font-semibold">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </main>
  );
}