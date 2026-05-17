"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail, ArrowUp } from "lucide-react";

const DEFAULTS = {
  brand: "frameproject",
  description:
    "Transformando histórias em experiências visuais inesquecíveis. Produção audiovisual profissional com paixão e criatividade.",
  license: `© ${new Date().getFullYear()} frameproject. Todos os direitos reservados.`,
  email: "contato@frameproject.com",
};

const NAV_ITEMS = [
  { name: "Sobre", href: "#about" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Serviços", href: "#services" },
  { name: "Contato", href: "#contact" },
];

const SERVICE_ITEMS = [
  "Produção de Vídeo",
  "Edição & Pós-produção",
  "Direção Criativa",
  "Storytelling",
  "Cobertura de Eventos",
  "Consultoria",
];

type FooterProps = {
  data?: {
    description?: string;
    license?: string;
  };
  contact?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    email?: string;
  };
};

export const Footer = ({ data, contact }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const description = data?.description || DEFAULTS.description;
  const license = data?.license || DEFAULTS.license;
  const email = contact?.email || DEFAULTS.email;

  const socialLinks = [
    contact?.instagram && {
      href: contact.instagram,
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://youtube.com",
      icon: Youtube,
      label: "YouTube",
    },
    contact?.linkedin && {
      href: contact.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${email}`,
      icon: Mail,
      label: "Email",
    },
  ].filter(Boolean) as { href: string; icon: typeof Instagram; label: string }[];

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              {DEFAULTS.brand}
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">{description}</p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {SERVICE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{license}</p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
