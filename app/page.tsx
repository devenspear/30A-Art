'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GatePage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/prototype');
      } else {
        setError('Invalid access code. Please try again.');
        setCode('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E1C22] px-4">
      <div className="w-full max-w-md">
        {/* Logo/Wordmark */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light tracking-tight text-[#F4F1EC]">
            30A<span className="mx-1">·</span>art
          </h1>
          <p className="mt-4 text-[#F4F1EC]/70 text-sm">
            The definitive guide to 30A's creative life
          </p>
        </div>

        {/* Access Code Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="code" className="sr-only">
              Enter your code
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-white/5 border border-[#F4F1EC]/20 rounded-xl
                       text-[#F4F1EC] placeholder:text-[#F4F1EC]/40
                       focus:outline-none focus:ring-2 focus:ring-[#1C5D73] focus:border-transparent
                       transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
              autoComplete="off"
              autoFocus
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-400/10 py-3 px-4 rounded-lg border border-red-400/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!code || isLoading}
            className="w-full px-6 py-4 bg-[#1C5D73] text-white rounded-xl font-medium
                     hover:bg-[#1C5D73]/90 focus:outline-none focus:ring-2 focus:ring-[#1C5D73] focus:ring-offset-2 focus:ring-offset-[#0E1C22]
                     transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Enter'}
          </button>
        </form>

        {/* Footer Note */}
        <div className="mt-12 text-center text-[#F4F1EC]/50 text-xs">
          <p>Private preview · Stakeholder access only</p>
        </div>
      </div>
    </div>
  );
}
