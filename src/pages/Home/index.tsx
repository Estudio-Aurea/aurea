import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Process from "./sections/Process";
import FeaturedWork from "./sections/FeaturedWork";
import Reviews from "./sections/Reviews";
import CTA from "../../components/CTA";

function Home() {
  return (
    <Layout>
      <SEO
        title="Aurea | Premium Web Design Studio"
        description="Aurea creates premium websites that combine strategy, design and development to help businesses stand out, build trust and grow online."
        canonical="/"
      />

      <Hero />
      <Services />
      <Process />
      <FeaturedWork />
      <Reviews />
      <CTA />
    </Layout>
  );
}

export default Home;