"use client";

import { ReactNode, useState } from "react";

import { Banner } from "@/components/Banner";
import { motion, AnimatePresence } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
}

export function Wrapper({ children }: ContainerProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  function handleRemoveBanner() {
    setIsBannerVisible(false);
  }

  return (
    <div className="flex w-full flex-col">
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Banner onRemove={handleRemoveBanner} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex w-full flex-grow flex-col">{children}</div>
    </div>
  );
}
