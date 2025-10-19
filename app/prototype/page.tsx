import { AnimatedHero } from '@/components/sections/animated-hero';
import { PublicArtMap } from '@/components/sections/public-art-map';
import { EmailCapture } from '@/components/sections/email-capture';
import { WhatsOn } from '@/components/sections/whats-on';
import { VisualEmbeds } from '@/components/sections/visual-embeds';

export default function PrototypePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Public Art Map Section */}
      <PublicArtMap />

      {/* What's On Section */}
      <WhatsOn />

      {/* Visual Embeds Section */}
      <VisualEmbeds />

      {/* Email Capture Section */}
      <EmailCapture />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light mb-2 text-primary">
                30A<span className="mx-1">·</span>art
              </h3>
              <p className="text-muted-foreground text-sm">
                The definitive guide to 30A&apos;s creative life
              </p>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Partners
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.culturalartsalliance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    Cultural Arts Alliance
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.alysbeach.com/digital-graffiti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    Digital Graffiti Festival
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                About
              </h4>
              <p className="text-xs text-muted-foreground mb-4">
                30A·art is an independent platform. Not affiliated with 30A® trademark.
              </p>
              <p className="text-xs text-muted-foreground">
                All photography used with permission or under Creative Commons licenses.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 30A·art · Private Preview for Stakeholders
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
