import Layout from "../../components/layout/Layout";
import PageHero from "../../components/PageHero";
import Experience from "./sections/Experience";
import WhatWeBuild from "./sections/WhatWeBuild";
import Process from "./sections/Process";
import FAQ from "./sections/FAQ";
import CTA from "../../components/CTA";
import SEO from "../../components/SEO";

function Services() {
  return (
    <Layout>

<SEO
  title="Website Design Services | Aurea"
  description="Explore Aurea's premium website design services, from elegant business websites to fully bespoke digital experiences tailored to ambitious brands."
  canonical="/services"
/>
      <PageHero
  eyebrow="SERVICES"
  title="Premium Websites"
  highlight="Built For Growth"
  description="From strategy and design to development and optimization, every Aurea website is crafted to elevate your brand and deliver measurable results."
/>

<Experience />
<WhatWeBuild />
<Process />
<FAQ />
<CTA />
    </Layout>

  );
}

export default Services;