"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { Availability } from "./Availability";

export function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  function handleRemoveBanner() {
    setIsBannerVisible(false);
  }

  return (
    <AnimatePresence>
      {isBannerVisible && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ height: "2rem" }}
          exit={{ opacity: 0, y: -50, height: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center border-b border-neutral-800"
        >
          <Availability />

          <button
            className="absolute right-4 flex h-4 w-4 items-center justify-center rounded-full"
            onClick={handleRemoveBanner}
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
