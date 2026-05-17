"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { getCloudinaryImageUrl } from "@/services/cloudinary";

export const Portfolio = ({ data }: { data: any[] }) => {
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
          Portfolio
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => {
            const thumbUrl = getCloudinaryImageUrl(project.thumb, {
              width: 800,
              height: 600,
              quality: 85,
            });

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card border border-border"
              >
                {thumbUrl && (
                  <div className="relative aspect-video">
                    <img
                      src={thumbUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.url_video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  {project.category && (
                    <span className="text-sm text-purple-400 font-medium">
                      {project.category}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
