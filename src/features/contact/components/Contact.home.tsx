"use client";

import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContactViewModel } from "@/viewmodels/useContactViewModel";
import { AnalyticsService } from "@/services/analytics";

const DEFAULTS = {
  email: "contato@frameproject.com",
  phone: "+55 (11) 99999-9999",
  address: "São Paulo, SP - Brasil",
  attendance_time_week: "Segunda a Sexta: 9h - 18h",
  attendance_time_weekend: "Sábado: 9h - 13h",
  attendance_time_sunday: "Domingo: Fechado",
};

export const Contact = ({ data }: { data: any }) => {
  const { ref } = useScrollAnimation(0.2);
  const {
    formData,
    updateField,
    handleSubmit,
    isSubmitting,
    submitStatus,
  } = useContactViewModel();

  const email = data?.email || DEFAULTS.email;
  const phone = data?.phone || DEFAULTS.phone;
  const address = data?.address || DEFAULTS.address;
  const attendanceWeek = data?.attendance_time_week || DEFAULTS.attendance_time_week;
  const attendanceWeekend =
    data?.attendance_time_weekend || DEFAULTS.attendance_time_weekend;
  const attendanceSunday =
    data?.attendance_time_sunday || DEFAULTS.attendance_time_sunday;

  const onSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e);
    AnalyticsService.trackFormSubmit("contact_form");
  };

  return (
    <section ref={ref} id="contact" className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entre em contato e vamos transformar suas ideias em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
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
                    href={`mailto:${email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefone</h4>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Localização</h4>
                  <p className="text-gray-400">{address}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-white font-semibold mb-4 text-xl">
                Horário de atendimento
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>{attendanceWeek}</p>
                <p>{attendanceWeekend}</p>
                <p className="text-gray-500">{attendanceSunday}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
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
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Conte-me sobre o seu projeto..."
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Mensagem enviada com sucesso! Retornaremos em breve.</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Erro ao enviar mensagem. Tente novamente.</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
