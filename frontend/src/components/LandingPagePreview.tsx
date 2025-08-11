import { Idea } from '@/types/idea';

interface LandingPagePreviewProps {
  idea: Idea;
}

export function LandingPagePreview({ idea }: LandingPagePreviewProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Original Idea
            </h3>
            <p className="text-gray-600 mt-1">{idea.idea}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Generated on</p>
            <p>{formatDate(idea.createdAt)}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium">ID:</span> {idea._id}
        </div>
      </div>

      {/* Generated Sections */}
      <div className="space-y-6">
        {idea.sections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Actions */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          What's Next?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">
              🎨 Customize Design
            </h4>
            <p className="text-sm text-gray-600">
              Modify colors, fonts, and layout to match your brand
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">
              📱 Make Responsive
            </h4>
            <p className="text-sm text-gray-600">
              Ensure it looks great on all devices
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">
              🔧 Add Functionality
            </h4>
            <p className="text-sm text-gray-600">
              Integrate forms, analytics, and other features
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">🚀 Deploy</h4>
            <p className="text-sm text-gray-600">
              Host your website and make it live
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
