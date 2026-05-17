"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getCloudinaryImageUrl } from "@/services/cloudinary";

export const Testimonials = ({ data }: { data: any[] }) => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Depoimentos
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((testimonial, index) => {
            const photoUrl = getCloudinaryImageUrl(testimonial.photo, {
              width: 150,
              height: 150,
              quality: 90,
            });

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border"
              >
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">
                  {testimonial.descrition}
                </p>
                <div className="flex items-center gap-4">
                  {photoUrl && (
                    <img
                      src={photoUrl}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    {testimonial.role && (
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
