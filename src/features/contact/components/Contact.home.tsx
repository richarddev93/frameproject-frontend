"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = ({ data }: { data: any }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="contact" className="py-32 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entre em contato e vamos transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {data.email && (
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {data.email}
                    </a>
                  </div>
                </motion.div>
              )}

              {data.address && (
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Localização</h4>
                    <p className="text-gray-400">{data.address}</p>
                  </div>
                </motion.div>
              )}
            </div>

            {(data.attendance_time_week || data.attendance_time_weekend) && (
              <motion.div
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h4 className="text-white font-semibold mb-4 text-xl flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  Horário de atendimento
                </h4>
                <div className="space-y-2 text-gray-300">
                  {data.attendance_time_week && <p>{data.attendance_time_week}</p>}
                  {data.attendance_time_weekend && <p>{data.attendance_time_weekend}</p>}
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <motion.div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </motion.div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Conte-me sobre o seu projeto..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar mensagem
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};
