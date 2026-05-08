'use client';

import { motion } from 'motion/react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="about" className="py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sobre
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Sou um videomaker e produtor solo apaixonado por contar histórias através da linguagem audiovisual. Com anos de experiência no mercado, transformo ideias em narrativas visuais que conectam marcas e pessoas.
              </p>

              <p>
                Cada projeto é uma oportunidade de criar algo único. Do conceito à entrega final, trabalho com dedicação total para superar expectativas e entregar resultados que fazem a diferença.
              </p>

              <p>
                Acredito no poder das histórias autênticas. Meu trabalho combina técnica apurada, visão criativa e um olhar atento aos detalhes que transformam bons vídeos em experiências memoráveis.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=750&fit=crop"
                alt="Videomaker em ação"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <motion.div
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
