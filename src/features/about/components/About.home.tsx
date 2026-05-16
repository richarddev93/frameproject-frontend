"use client";

import { motion } from "framer-motion";

export const About = ({ data }: { data: any }) => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sobre Nós
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.description}
            </p>
          </div>
          {data.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={data.image}
                alt="About"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
