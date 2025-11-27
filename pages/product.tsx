"use client"

import { useState, FormEvent } from 'react';
import { useAuth } from '@clerk/nextjs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { Protect, PricingTable, UserButton } from '@clerk/nextjs';

function ConsultationForm() {
    const { getToken } = useAuth();

    // Form state
    const [patientName, setPatientName] = useState('');
    const [visitDate, setVisitDate] = useState(new Date().toISOString().slice(0, 10));
    const [notes, setNotes] = useState('');

    // Streaming state
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setOutput('');
        setLoading(true);

        const jwt = await getToken();
        if (!jwt) {
            setOutput('Authentication required');
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        let buffer = '';

        await fetchEventSource('/api/consultation', {
            signal: controller.signal,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                patient_name: patientName,
                date_of_visit: visitDate,
                notes,
            }),
            onmessage(ev) {
                buffer += ev.data;
                setOutput(buffer);
            },
            onclose() { 
                setLoading(false); 
            },
            onerror(err) {
                console.error('SSE error:', err);
                controller.abort();
                setLoading(false);
            },
        });
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header */}
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                    Consultation Assistant
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Transform your consultation notes into professional summaries, action items, and patient communications
                </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Form */}
                <section className="space-y-8">
                    <div className="card">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                            Consultation Details
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Patient Name
                                </label>
                                <input
                                    type="text"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Enter patient name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Visit Date
                                </label>
                                <input
                                    type="date"
                                    value={visitDate}
                                    onChange={(e) => setVisitDate(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Consultation Notes
                                </label>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    rows={12}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Enter your consultation notes here..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        Processing...
                                    </div>
                                ) : (
                                    'Generate Professional Summary'
                                )}
                            </button>
                        </form>
                    </div>
                </section>

                {/* Output Section */}
                <section className="space-y-8">
                    <div className="card min-h-[600px]">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                            AI-Generated Summary
                        </h2>
                        
                        {loading && !output ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Analyzing consultation notes...
                                </p>
                            </div>
                        ) : output ? (
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <div className="markdown-content">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm, remarkBreaks]}
                                    >
                                        {output}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="text-6xl mb-6 opacity-50">📋</div>
                                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                    Ready to Process
                                </h3>
                                <p className="text-gray-500 dark:text-gray-500 max-w-sm">
                                    Fill in the consultation details and click &quot;Generate&quot; to create your professional summary
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* Features Highlight */}
            <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold gradient-text mb-12">What You&apos;ll Get</h3>
                <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="card text-center">
                        <div className="text-3xl mb-3">📄</div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Medical Summary</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive clinical overview</p>
                    </div>
                    <div className="card text-center">
                        <div className="text-3xl mb-3">📋</div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Action Items</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Clear follow-up tasks</p>
                    </div>
                    <div className="card text-center">
                        <div className="text-3xl mb-3">💬</div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Patient Email</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ready-to-send communication</p>
                    </div>
                    <div className="card text-center">
                        <div className="text-3xl mb-3">🔒</div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">HIPAA Secure</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Fully compliant processing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Product() {
    return (
        <main className="min-h-screen bg-pattern bg-slate-50 dark:bg-slate-900">
            {/* User Menu in Top Right */}
            <div className="absolute top-6 right-6 z-10">
                <UserButton showName={true} />
            </div>

            {/* Subscription Protection */}
            <Protect
                plan="premium_subscription"
                fallback={
                    <div className="max-w-4xl mx-auto px-6 py-20">
                        <header className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                                Healthcare Professional Plan
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                                Unlock the full power of AI-assisted medical documentation
                            </p>
                        </header>
                        <div className="card">
                            <PricingTable />
                        </div>
                    </div>
                }
            >
                <ConsultationForm />
            </Protect>
        </main>
    );
}