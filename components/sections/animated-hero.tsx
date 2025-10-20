'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AnimatedHero() {
  const floatingArtwork = [
    {
      id: 1,
      filename: 'unnamed-1.jpg',
      top: '28%',
      left: '22%',
      size: 'w-32 h-32 sm:w-42 sm:h-42 lg:w-56 lg:h-56',
      y: [0, -10, 6, -8, 0],
      x: [0, 10, -6, 8, 0],
      rotate: [-6, 3, -2, 4, -6],
      delay: 0,
      duration: 18,
    },
    {
      id: 2,
      filename: 'unnamed-2.jpg',
      top: '34%',
      left: '65%',
      size: 'w-32 h-32 sm:w-44 sm:h-44 lg:w-58 lg:h-58',
      y: [0, -12, 8, -10, 0],
      x: [0, -8, 10, -8, 0],
      rotate: [4, -3, 2, -5, 4],
      delay: 0.6,
      duration: 20,
    },
    {
      id: 3,
      filename: 'unnamed-3.jpg',
      top: '52%',
      left: '40%',
      size: 'w-30 h-30 sm:w-42 sm:h-42 lg:w-54 lg:h-54',
      y: [0, -10, 6, -8, 0],
      x: [0, 8, -10, 6, 0],
      rotate: [-3, 2, -1, 3, -3],
      delay: 1.2,
      duration: 16,
    },
    {
      id: 4,
      filename: 'unnamed-4.jpg',
      top: '60%',
      left: '80%',
      size: 'w-32 h-32 sm:w-44 sm:h-44 lg:w-58 lg:h-58',
      y: [0, -10, 8, -9, 0],
      x: [0, -10, 12, -8, 0],
      rotate: [5, -2, 4, -3, 5],
      delay: 1.8,
      duration: 19,
    },
    {
      id: 5,
      filename: 'unnamed-5.jpg',
      top: '72%',
      left: '28%',
      size: 'w-32 h-32 sm:w-44 sm:h-44 lg:w-58 lg:h-58',
      y: [0, -9, 6, -7, 0],
      x: [0, 8, -10, 8, 0],
      rotate: [-8, 4, -3, 5, -8],
      delay: 2.2,
      duration: 21,
    },
    {
      id: 6,
      filename: 'unnamed-6.jpg',
      top: '78%',
      left: '62%',
      size: 'w-34 h-34 sm:w-46 sm:h-46 lg:w-60 lg:h-60',
      y: [0, -10, 7, -8, 0],
      x: [0, -10, 12, -8, 0],
      rotate: [3, -4, 2, -5, 3],
      delay: 2.8,
      duration: 22,
    },
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

          {/* Floating Artwork Showcase */}
          <div className="mt-24 flex justify-center">
            <div className="relative w-full max-w-6xl h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden rounded-[3rem] bg-white/30 ring-1 ring-black/5 backdrop-blur-sm">
              {floatingArtwork.map(piece => (
                <motion.div
                  key={piece.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: piece.top, left: piece.left }}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{
                    opacity: [0.9, 0.92, 0.88, 0.94, 0.9],
                    y: piece.y,
                    x: piece.x,
                    rotate: piece.rotate,
                    scale: [0.95, 1.02, 0.98, 1.04, 0.95],
                  }}
                  transition={{
                    duration: piece.duration,
                    delay: piece.delay,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  <div className={`relative ${piece.size} overflow-hidden rounded-[2rem] shadow-[0_25px_70px_-35px_rgba(15,23,42,0.35)]`}>
                    <Image
                      src={`/artwork/${piece.filename}`}
                      alt={`30A Public Art ${piece.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={piece.id <= 3}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
