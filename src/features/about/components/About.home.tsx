"use client";

import { motion } from "framer-motion";
import { getCloudinaryImageUrl } from "@/services/cloudinary";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = ({ data }: { data: any }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const imageUrl = getCloudinaryImageUrl(data.image, {
    width: 800,
    height: 1000,
    quality: 90,
  });

  return (
    <section ref={ref} id="about" className="py-32 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sobre
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-300 text-lg leading-relaxed prose prose-invert max-w-none prose-p:my-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              dangerouslySetInnerHTML={{
                __html: data.description || "Descrição não disponível",
              }}
            />
          </motion.div>

          {imageUrl && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10">
                <img
                  src={imageUrl}
                  alt="Sobre"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
