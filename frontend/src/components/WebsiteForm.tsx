'use client';

import { useState } from 'react';

interface WebsiteFormProps {
  onSubmit: (idea: string) => void;
  isLoading: boolean;
}

export function WebsiteForm({ onSubmit, isLoading }: WebsiteFormProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="idea"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Describe your website idea
          </label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g., Landing page for a bakery with online ordering, beautiful photos of pastries, and customer testimonials"
            className="input-field h-32 resize-none"
            disabled={isLoading}
            required
          />
          <p className="mt-2 text-sm text-gray-500">
            Be specific about what you want - the more details, the better the
            result!
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading || !idea.trim()}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Generating Website...
            </div>
          ) : (
            'Generate Website'
          )}
        </button>
      </form>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          💡 Pro Tips
        </h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Include your target audience and business goals</li>
          <li>
            • Mention specific features you want (contact forms, pricing, etc.)
          </li>
          <li>• Describe your brand style and tone</li>
          <li>
            • Specify if you need e-commerce, booking, or other functionality
          </li>
        </ul>
      </div>
    </div>
  );
}
