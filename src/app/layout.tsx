import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { getContact } from '@/features/contact/services/get-contact';
import { contactMapper } from '@/features/contact/mappers/contact.mapper';
import { contactViewModel } from '@/features/contact/viewmodels/contact.viewmodel';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "frameproject | Produção Audiovisual Profissional",
  description: "Transformando histórias em experiências visuais inesquecíveis",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  let phone = "+55 (11) 99999-9999";

  try {
    const contactResponse = await getContact();
    const mapped = contactMapper(contactResponse);
    if (mapped && mapped.length > 0) {
      const contactVm = contactViewModel(mapped);
      if (contactVm?.phone) {
        phone = contactVm.phone;
      }
    }
  } catch (error) {
    console.error("Failed to fetch contact for WhatsApp floating button:", error);
  }

  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <WhatsAppButton phone={phone} />
      </body>
    </html>
  );
}

