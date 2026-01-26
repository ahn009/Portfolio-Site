import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Muhammad Awais - Full Stack Developer",
  description:
    "Get in touch with Muhammad Awais for web development projects, freelance opportunities, or collaborations. Full Stack Developer specializing in Next.js and React.",
  openGraph: {
    title: "Contact Muhammad Awais - Full Stack Developer",
    description: "Discuss your next web development project. Available for freelance work and full-time positions.",
    url: "https://muhammadawais.dev/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
