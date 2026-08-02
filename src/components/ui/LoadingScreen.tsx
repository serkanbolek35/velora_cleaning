"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 ring-gold/40"
            >
              <Image src="/images/logo.jpg" alt="Velora Cleaning" fill className="object-cover" priority />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-display text-2xl tracking-[0.2em] text-gold-gradient">VELORA</p>
              <p className="text-[10px] tracking-[0.35em] text-graystone mt-1">CLEANING</p>
            </motion.div>
            <div className="w-40 h-px bg-obsidian-soft overflow-hidden rounded-full">
              <motion.div
                className="h-full shimmer-bg"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
