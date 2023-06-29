"use client";

import { X } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import { Notification } from "./Notification";

interface BannerProps {
  onRemove: () => void;
}

export function Banner({ onRemove }: BannerProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex h-8 items-center justify-center border-b border-neutral-800 p-2"
    >
      <Notification />

      <button
        className="absolute right-4 flex h-4 w-4 items-center justify-center rounded-full"
        onClick={onRemove}
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
