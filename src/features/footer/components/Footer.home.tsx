"use client";

import { motion } from "framer-motion";

export const Footer = ({ data }: { data: any }) => {
  return (
    <footer className="py-12 px-4 bg-black border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {data.description && (
            <p className="text-gray-400 mb-4">
              {data.description}
            </p>
          )}
          {data.license && (
            <p className="text-sm text-gray-500">
              {data.license}
            </p>
          )}
        </motion.div>
      </div>
    </footer>
  );
};
