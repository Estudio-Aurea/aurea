import Layout from "../../components/layout/Layout";
import PageHero from "../../components/PageHero";
import FeaturedProjects from "./sections/FeaturedProjects";
import SEO from "../../components/SEO";

function Portfolio() {
  return (
    <Layout>

<SEO
  title="Portfolio | Aurea"
  description="Browse a selection of Aurea's recent web design projects showcasing premium user experiences, modern development and refined visual design."
  canonical="/portfolio"
/>
      <PageHero
        eyebrow="PORTFOLIO"
        title="Our Latest"
        highlight="Digital Experiences"
        description="Explore a selection of live websites crafted by Aurea. Every project is designed with strategy, precision and a commitment to exceptional user experience."
      />

      <FeaturedProjects />
    </Layout>
  );
}

export default Portfolio;