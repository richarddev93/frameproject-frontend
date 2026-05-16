"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  Film, 
  Lightbulb, 
  BookOpen, 
  Camera, 
  Users 
} from "lucide-react";

const iconMap: Record<string, any> = {
  Video,
  Film,
  Lightbulb,
  BookOpen,
  Camera,
  Users,
};

export const Services = ({ data }: { data: any[] }) => {
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
          Nossos Serviços
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service, index) => {
            const Icon = iconMap[service.icon] || Lightbulb;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-purple-500 transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
