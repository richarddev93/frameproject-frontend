"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCloudinaryImageUrl } from "@/services/cloudinary";

export const Hero = ({ data }: { data: any }) => {
  const bannerUrl = getCloudinaryImageUrl(data.banner, {
    width: 1920,
    height: 1080,
    quality: 90,
  });

  const handleCTAClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="hero-bg-layer absolute inset-0">
        {bannerUrl ? (
          <div className="absolute inset-0">
            <img
              src={bannerUrl}
              alt={data.title}
              className="w-full h-full object-cover"
              {...({ fetchPriority: 'high' } as any)}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-black/80 to-blue-900/70" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        )}

        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ scale: 1.2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        </motion.div>
      </div>

      <motion.div className="hero-content-layer relative z-10 text-center p-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            {data.title}
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {data.description || "Transformando histórias em experiências visuais inesquecíveis"}
        </motion.p>

        <motion.button
          onClick={handleCTAClick}
          className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {data.subtitle || "Vamos conversar"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 2, repeat: Infinity },
          }}
        >
          <motion.div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
