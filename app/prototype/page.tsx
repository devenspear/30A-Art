import { PublicArtMap } from '@/components/sections/public-art-map';
import { EmailCapture } from '@/components/sections/email-capture';
import { WhatsOn } from '@/components/sections/whats-on';
import { VisualEmbeds } from '@/components/sections/visual-embeds';

export default function PrototypePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1C22] via-[#1C5D73] to-[#0E1C22] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            30A<span className="mx-2">·</span>art
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 mb-4">
            The definitive guide to 30A&apos;s creative life
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Curating and elevating the creative ecosystem along Florida&apos;s 30A corridor—from
            Rosemary Beach to Seaside.
          </p>

          {/* Mission Statement */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-base text-white/80 italic">
              &ldquo;Connecting residents, artists, galleries, and cultural organizations through a
              platform that celebrates the vibrant creative spirit of coastal Florida.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Public Art Map Section */}
      <PublicArtMap />

      {/* What's On Section */}
      <WhatsOn />

      {/* Visual Embeds Section */}
      <VisualEmbeds />

      {/* Email Capture Section */}
      <EmailCapture />

      {/* Footer */}
      <footer className="bg-[#0E1C22] text-[#F4F1EC] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light mb-2">
                30A<span className="mx-1">·</span>art
              </h3>
              <p className="text-[#F4F1EC]/70 text-sm">
                The definitive guide to 30A&apos;s creative life
              </p>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-[#F4F1EC]/50 mb-4">
                Partners
              </h4>
              <ul className="space-y-2 text-sm text-[#F4F1EC]/70">
                <li>
                  <a
                    href="https://www.culturalartsalliance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C5D73] transition-colors"
                  >
                    Cultural Arts Alliance
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.alysbeach.com/digital-graffiti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C5D73] transition-colors"
                  >
                    Digital Graffiti Festival
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-[#F4F1EC]/50 mb-4">
                About
              </h4>
              <p className="text-xs text-[#F4F1EC]/60 mb-4">
                30A·art is an independent platform. Not affiliated with 30A® trademark.
              </p>
              <p className="text-xs text-[#F4F1EC]/60">
                All photography used with permission or under Creative Commons licenses.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-[#F4F1EC]/10 text-center">
            <p className="text-xs text-[#F4F1EC]/50">
              © 2025 30A·art · Private Preview for Stakeholders
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
