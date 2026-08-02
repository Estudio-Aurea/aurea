import Layout from "../../components/layout/Layout";
import PageHero from "../../components/PageHero";
import ContactSection from "./sections/ContactSection";
import SEO from "../../components/SEO";

function Contact() {
  return (
    <Layout>

<SEO
  title="Contact Aurea | Start Your Project"
  description="Ready to build a premium website? Get in touch with Aurea to discuss your project and create a digital experience that elevates your brand."
  canonical="/contact"
/>
      <PageHero
        eyebrow="CONTACT"
        title="Let's Build"
        highlight="Something Exceptional"
        description="Tell us about your vision and we'll help transform it into a premium digital experience."
      />

      <ContactSection />
    </Layout>
  );       
}

export default Contact;