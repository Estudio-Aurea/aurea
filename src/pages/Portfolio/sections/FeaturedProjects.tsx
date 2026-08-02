import { motion } from "framer-motion";
import BrowserFrame from "../../../components/BrowserFrame";

const projects = [
  {
    title: "ESSENTIAL",
    subtitle: "A Strong Digital Foundation",
    description:
      "Perfect for businesses launching their online presence with a refined and professionally crafted website.",
    url: "https://saminnanwarr-source.github.io/gai-food-ind/",
    domain: "saminnanwarr-source.github.io",
  },
  {
    title: "SIGNATURE",
    subtitle: "The Complete Brand Experience",
    description:
      "Designed for businesses ready to invest in a polished digital presence that builds trust and drives growth.",
    url: "https://fueld.netlify.app",
    domain: "fueld.netlify.app",
  },
  {
    title: "AUREA",
    subtitle: "Our Flagship Experience",
    description:
      "Our most detailed, strategic and visually ambitious digital experience. Every element is thoughtfully crafted to create a truly exceptional online presence.",
    url: "https://signature-ten-ruddy.vercel.app/",
    domain: "signature-ten-ruddy.vercel.app",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            FEATURED PROJECTS
          </p>

          <h2
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            Live Experiences.
            <br />
            Built For Real Businesses.
          </h2>
        </motion.div>

        <div className="space-y-44">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
              }}
              className={`grid items-center gap-20 lg:grid-cols-2 ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Browser */}

              <BrowserFrame
                title={project.domain}
                url={project.url}
              />

              {/* Content */}

              <div>
                <p className="mb-4 uppercase tracking-[0.35em] text-primary">
                  {project.title}
                </p>

                <h3
                  className="mb-8 text-white"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(3rem,4vw,4.5rem)",
                  }}
                >
                  {project.subtitle}
                </h3>

                <p className="mb-10 max-w-xl leading-8 text-text-muted">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    text-lg
                    font-medium
                    text-primary
                  "
                >
                  Explore Project

                  <span
                    className="
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;