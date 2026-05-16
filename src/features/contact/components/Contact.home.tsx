"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter 
} from "lucide-react";

export const Contact = ({ data }: { data: any }) => {
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
          Contato
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Vamos conversar?
            </h3>
            <div className="space-y-6">
              {data.email && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
              )}
              {data.address && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    {data.address}
                  </p>
                </div>
              )}
              {(data.attendance_time_week || data.attendance_time_weekend) && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-gray-300">
                    {data.attendance_time_week && (
                      <p>Semana: {data.attendance_time_week}</p>
                    )}
                    {data.attendance_time_weekend && (
                      <p>Fim de semana: {data.attendance_time_weekend}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-4 mt-8">
              {data.instagram && (
                <a 
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-purple-400" />
                </a>
              )}
              {data.facebook && (
                <a 
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-purple-400" />
                </a>
              )}
              {data.linkedin && (
                <a 
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </a>
              )}
              {data.x && (
                <a 
                  href={data.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-purple-400" />
                </a>
              )}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Mensagem
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Sua mensagem"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
