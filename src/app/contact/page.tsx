import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Muhammad Awais - Full Stack Developer",
  description: "Get in touch with Muhammad Awais for web development projects, collaborations, or job opportunities.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
