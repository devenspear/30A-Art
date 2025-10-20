'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ArtworkCredit {
  id: string;
  filename: string;
  title: string;
  artist: string;
  type: string;
  year: string;
  credit: string;
  url: string;
}

export function AnimatedHero() {
  const [artworkCredits, setArtworkCredits] = useState<ArtworkCredit[]>([]);

  useEffect(() => {
    // Load artwork credits
    fetch('/data/artwork-credits.json')
      .then((res) => res.json())
      .then((data) => setArtworkCredits(data))
      .catch((err) => console.error('Error loading artwork credits:', err));
  }, []);

  // Animation variants for floating artwork
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, -30, 0],
      x: [0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -15, 0],
      x: [0, -10, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  // Placeholder artwork - will be replaced with actual images
  const placeholderArtwork = [
    { id: 1, variant: floatingVariants, position: 'top-20 left-10', size: 'w-48 h-48', delay: 0 },
    { id: 2, variant: floatingVariants2, position: 'top-40 right-20', size: 'w-56 h-56', delay: 0.5 },
    { id: 3, variant: floatingVariants3, position: 'bottom-32 left-1/4', size: 'w-40 h-40', delay: 1 },
    { id: 4, variant: floatingVariants, position: 'bottom-20 right-1/3', size: 'w-52 h-52', delay: 1.5 },
    { id: 5, variant: floatingVariants2, position: 'top-1/3 right-1/4', size: 'w-44 h-44', delay: 2 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background Artwork */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {placeholderArtwork.map((artwork) => (
          <motion.div
            key={artwork.id}
            className={`absolute ${artwork.position} ${artwork.size} hidden lg:block`}
            variants={artwork.variant}
            animate="animate"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: artwork.delay }}
          >
            {/* Placeholder for artwork image */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl backdrop-blur-sm border border-primary/5">
              <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                {artworkCredits[artwork.id - 1] ? (
                  <div className="relative w-full h-full">
                    {/* Replace this div with actual Image component when images are added */}
                    <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center p-4 text-center">
                      <span className="text-sm font-medium text-primary">
                        {artworkCredits[artwork.id - 1].title}
                      </span>
                    </div>
                    {/* When images are ready:
                    <Image
                      src={`/artwork/${artworkCredits[artwork.id - 1].filename}`}
                      alt={artworkCredits[artwork.id - 1].title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                    */}
                  </div>
                ) : (
                  <span>Artwork {artwork.id}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
        </div>

        {/* Featured Art Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {artworkCredits.slice(0, 3).map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              whileHover={{ y: -8 }}
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                {/* Placeholder - replace with actual image */}
                <span className="text-sm text-gray-600">
                  {artwork.type}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{artwork.title}</h3>
              <p className="text-sm text-gray-600">{artwork.credit}</p>
            </motion.div>
          ))}
        </motion.div>
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
