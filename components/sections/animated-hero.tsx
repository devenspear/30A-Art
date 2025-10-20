'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AnimatedHero() {
  // Hardcoded artwork filenames - no need for JSON loading
  const artworkFiles = [
    'unnamed.jpg',
    'unnamed-1.jpg',
    'unnamed-2.jpg',
    'unnamed-3.jpg',
    'unnamed-4.jpg',
    'unnamed-5.jpg',
  ];

  // Animation variants for fluid, artistic floating artwork
  const floatingVariants = {
    animate: {
      y: [0, -25, 10, -20, 0],
      x: [0, 5, -3, 8, 0],
      rotate: [0, 2, -1, 3, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, -35, 15, -30, 0],
      x: [0, 15, -10, 12, 0],
      rotate: [0, -3, 1, -4, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -20, 8, -18, 0],
      x: [0, -12, 6, -15, 0],
      rotate: [0, 3, -2, 4, 0],
      transition: {
        duration: 13,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  // Artistic floating artwork positions with 6 pieces - 50% larger, less overlap
  const artworkPieces = [
    { id: 1, variant: floatingVariants, position: 'top-10 left-0', size: 'w-96 h-96', delay: 0, rotation: -5 },
    { id: 2, variant: floatingVariants2, position: 'top-20 right-0', size: 'w-[432px] h-[432px]', delay: 0.5, rotation: 8 },
    { id: 3, variant: floatingVariants3, position: 'bottom-20 left-[5%]', size: 'w-84 h-84', delay: 1, rotation: -3 },
    { id: 4, variant: floatingVariants, position: 'bottom-10 right-[8%]', size: 'w-90 h-90', delay: 1.5, rotation: 6 },
    { id: 5, variant: floatingVariants2, position: 'top-1/2 left-[35%]', size: 'w-78 h-78', delay: 2, rotation: -8 },
    { id: 6, variant: floatingVariants3, position: 'bottom-1/2 right-[30%]', size: 'w-[408px] h-[408px]', delay: 2.5, rotation: 4 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/30a-logo.png"
                alt="30A·art"
                width={600}
                height={200}
                className="mx-auto max-w-lg w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6 max-w-4xl mx-auto"
          >
            The definitive guide to 30A&apos;s creative life
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-800 font-medium mb-12 max-w-2xl mx-auto"
          >
            Discover sculptures, murals, and installations from Rosemary Beach to Seaside
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#map"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore the Map
            </a>
            <a
              href="#subscribe"
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-200"
            >
              Stay Updated
            </a>
          </motion.div>

          {/* Floating Artwork Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 relative h-[900px] max-w-6xl mx-auto"
          >
            {artworkFiles.map((filename, index) => {
              const artwork = artworkPieces[index];
              return (
                <motion.div
                  key={index}
                  className={`absolute ${artwork.position} ${artwork.size}`}
                  variants={artwork.variant}
                  animate="animate"
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: artwork.rotation }}
                  transition={{ duration: 1.2, delay: artwork.delay }}
                >
                  <div className="relative w-full h-full group">
                    {/* Glowing backdrop effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-teal-200/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />

                    {/* Artwork container with shadow */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                      <img
                        src={`/artwork/${filename}`}
                        alt={`30A Public Art ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
