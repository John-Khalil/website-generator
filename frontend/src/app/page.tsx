'use client';

import { useState } from 'react';
import { WebsiteForm } from '@/components/WebsiteForm';
import { LandingPagePreview } from '@/components/LandingPagePreview';
import { Idea } from '@/types/idea';

export default function HomePage() {
  const [currentIdea, setCurrentIdea] = useState<Idea | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleIdeaSubmit = async (idea: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate website');
      }

      const data = await response.json();
      setCurrentIdea(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentIdea(null);
    setError(null);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Website Generator
        </h1>
        <p className="text-xl text-gray-600">
          Transform your website ideas into beautiful landing pages with AI
        </p>
      </header>

      {!currentIdea ? (
        <WebsiteForm onSubmit={handleIdeaSubmit} isLoading={isLoading} />
      ) : (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Generated Landing Page
            </h2>
            <button onClick={handleReset} className="btn-secondary">
              Generate New Idea
            </button>
          </div>
          <LandingPagePreview idea={currentIdea} />
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  );
}
