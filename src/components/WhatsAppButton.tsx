"use client";

import { AnalyticsService } from "@/services/analytics";

interface WhatsAppButtonProps {
  phone: string;
}

export const WhatsAppButton = ({ phone }: WhatsAppButtonProps) => {
  // Strip non-digit characters to construct the wa.me link.
  const cleanPhone = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  const handleClick = () => {
    AnalyticsService.trackCTAClick("whatsapp_float_button");
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onClick={handleClick}
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Sleek Tooltip */}
      <span className="whatsapp-tooltip">Fale conosco!</span>

      {/* WhatsApp Icon SVG */}
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.957 9.957 0 0 0 4.805 1.232h.005c5.505 0 9.99-4.478 9.99-9.984 0-2.67-1.037-5.18-2.92-7.062C17.197 2.943 14.686 2 12.012 2zm5.826 14.199c-.32.9-1.845 1.661-2.53 1.775-.59.098-1.358.18-3.967-.887-3.337-1.366-5.492-4.735-5.658-4.956-.165-.22-1.325-1.755-1.325-3.347 0-1.592.83-2.373 1.127-2.692.296-.32.653-.4.87-.4.218 0 .436.002.626.01.196.009.462-.073.724.56.262.63.898 2.186.976 2.345.078.157.13.34.026.549-.104.208-.156.362-.312.543-.156.181-.328.401-.468.538-.157.154-.32.322-.138.63.182.308.809 1.327 1.734 2.148.924.821 1.702 1.075 2.011 1.229.309.154.49.13.672-.077.182-.208.784-.908.993-1.218.209-.31.417-.26.702-.154.285.107 1.807.85 2.119.997.311.147.52.22.595.347.075.127.075.738-.245 1.637z" />
      </svg>
    </a>
  );
};
