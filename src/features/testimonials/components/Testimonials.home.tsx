"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getCloudinaryImageUrl } from "@/services/cloudinary";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Testimonials = ({ data }: { data: any[] }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="testimonials" className="py-32 px-4 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            O que meus clientes dizem sobre o trabalho
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => {
            const photoUrl = getCloudinaryImageUrl(testimonial.photo, {
              width: 150,
              height: 150,
              quality: 90,
            });

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 hover:border-purple-500/20 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <Quote className="w-12 h-12 text-purple-500/30 mb-6" />

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  &ldquo;{testimonial.descrition || testimonial.description}&rdquo;
                </p>

                <motion.div className="flex items-center gap-4">
                  <motion.div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500">
                    {photoUrl ? (
                      <img
                        src={photoUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <motion.div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name?.charAt(0)}
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    {testimonial.role && (
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
