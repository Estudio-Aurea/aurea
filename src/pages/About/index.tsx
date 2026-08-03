import Layout from "../../components/layout/Layout";
import PageHero from "../../components/PageHero";
import WhoWeAre from "./sections/WhoWeAre";
import Philosophy from "./sections/Philosophy";
import WhyAurea from "./sections/WhyAurea";
import Values from "./sections/Values";
import CTA from "../../components/CTA";
import SEO from "../../components/SEO";

function About() {
  return (
    <Layout>

<SEO
  title="About Aurea | Premium Web Design Studio"
  description="Learn about Aurea, our design philosophy, creative process and commitment to crafting premium digital experiences that elevate brands."
  canonical="/about"
/>

<PageHero
  eyebrow="ABOUT"
  title="Crafting Digital Experiences"
  highlight="That Leave a Lasting Impression"
  description="At Aurea, we combine strategy, design and development to create premium websites that elevate brands and leave lasting impressions."
/>

{/* <WhoWeAre /> */}

<Philosophy />

<WhyAurea />

<Values />

<CTA />

    </Layout>
  );
}

export default About;