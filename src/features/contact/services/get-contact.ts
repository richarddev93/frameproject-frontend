import { cmsClient } from "@/services/cmsClient";
import { Contact } from "../types/contact";

export const getContact = async () => {
  return await cmsClient.getCollection<Contact>('contato', {
    revalidate: 60,
    tags: 'contact',
  });
}
