import React from 'react';
import { motion } from 'framer-motion';

/**
 * World-class animated entrance loading screen in Midnight Dark Mode.
 * Displays a glowing gold and white logo with elegant scaling and transitions.
 */
export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1020] text-white overflow-hidden"
    >
      {/* Animated Mesh Backglow */}
      <div className="absolute inset-0 opacity-25 bg-radial-gradient from-primary via-transparent to-transparent pointer-events-none scale-150 blur-3xl animate-pulse" />

      {/* Main Logo Assembly */}
      <div className="relative flex flex-col items-center select-none max-w-sm px-6">
        
        {/* Emblem scale entrance */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glowing outer golden ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-secondary/35 to-primary/35 blur-md animate-pulse" />
          
          <img
            src="/images/logo.png"
            alt="Ganga Literature Festival Logo"
            className="relative h-24 w-auto object-contain"
            style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
          />
        </motion.div>

        {/* Progress Bar (Gold fill) */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full mt-10 overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"
          />
        </div>

        {/* Subtitle trackers */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xs font-bold text-secondary uppercase tracking-[0.25em] mt-5 font-display text-center leading-relaxed"
        >
          Bihar's Cultural Renaissance
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[10px] text-gray-300 font-sans tracking-[0.1em] mt-1.5 uppercase"
        >
          Established 2023
        </motion.p>
      </div>
      
    </motion.div>
  );
}
