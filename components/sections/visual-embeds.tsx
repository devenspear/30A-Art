'use client';

import { useEffect, useState } from 'react';

interface EmbedData {
  instagram: string[];
  flickr: string[];
}

export function VisualEmbeds() {
  const [embedData, setEmbedData] = useState<EmbedData | null>(null);

  useEffect(() => {
    // Load embed URLs from JSON
    fetch('/data/embeds.json')
      .then((res) => res.json())
      .then((data) => setEmbedData(data))
      .catch((err) => console.error('Error loading embeds:', err));
  }, []);

  if (!embedData) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-primary mb-4">
            Community Captures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Art and culture through the lens of our creative community
          </p>
        </div>

        {/* Placeholder for visual embeds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Instagram Placeholder */}
          <div className="bg-muted/30 rounded-xl p-8 border border-border flex flex-col items-center justify-center min-h-64">
            <svg
              className="w-12 h-12 text-muted-foreground/40 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-muted-foreground text-center">
              Instagram embeds will appear here
            </p>
          </div>

          {/* Flickr Placeholder */}
          <div className="bg-muted/30 rounded-xl p-8 border border-border flex flex-col items-center justify-center min-h-64">
            <svg
              className="w-12 h-12 text-muted-foreground/40 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5.5 12a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm8 0a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
            </svg>
            <p className="text-sm text-muted-foreground text-center">
              Flickr Creative Commons images will appear here
            </p>
          </div>

          {/* Community Placeholder */}
          <div className="bg-muted/30 rounded-xl p-8 border border-border flex flex-col items-center justify-center min-h-64">
            <svg
              className="w-12 h-12 text-muted-foreground/40 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-muted-foreground text-center">
              More community photos coming soon
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            All images properly attributed via oEmbed and Creative Commons licenses.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Want to share your 30A art photos? Tag{' '}
            <span className="text-secondary font-medium">#30Aart</span>
          </p>
        </div>
      </div>
    </section>
  );
}
