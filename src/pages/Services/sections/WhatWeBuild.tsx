import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites designed to establish trust, build credibility and convert visitors into customers.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused, high-converting pages built for products, campaigns and lead generation.",
  },
  {
    number: "03",
    title: "Portfolio Websites",
    description:
      "Elegant websites that showcase your work and strengthen your personal brand.",
  },
  {
    number: "04",
    title: "E-Commerce",
    description:
      "Beautiful online stores built for speed, trust and scalable growth.",
  },
  {
    number: "05",
    title: "Custom Web Experiences",
    description:
      "Completely bespoke websites with advanced interactions and tailored functionality.",
  },
  {
    number: "06",
    title: "Website Redesigns",
    description:
      "Transform outdated websites into modern, high-performing digital experiences.",
  },
];

function WhatWeBuild() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            WE BUILD
          </p>

          <h2
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            Websites Designed
            <br />
            To Match Your Vision
          </h2>
        </motion.div>

        <div>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover="hover"
              className="group cursor-pointer border-b border-white/10 py-10"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[80px_1fr_auto]">

                <span className="text-2xl font-light text-primary/60">
                  {service.number}
                </span>

                <div>
                  <h3
                    className="mb-3 text-white transition-colors duration-300 group-hover:text-primary"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.4rem",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="max-w-2xl leading-8 text-text-muted">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  variants={{
                    hover: {
                      x: 10,
                    },
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <ArrowRight
                    size={28}
                    className="text-primary"
                  />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatWeBuild;