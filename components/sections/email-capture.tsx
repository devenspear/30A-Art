'use client';

import { useState } from 'react';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="subscribe" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Stay Connected
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Get updates on exhibitions, public art installations, and cultural events along the coast.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
              required
              className="flex-1 px-4 py-3 bg-white border border-border rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                       transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium
                       hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                       transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>

          {message && (
            <div
              className={`mt-4 text-sm p-3 rounded-lg ${
                status === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message}
            </div>
          )}
        </form>

        <p className="mt-6 text-xs text-gray-600">
          No spam, just art and culture. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
