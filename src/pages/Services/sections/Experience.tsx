import { motion } from "framer-motion";

const plans = [
  {
    name: "ESSENTIAL",
    title: "A Strong Digital Foundation",
    description:
      "Perfect for businesses launching their online presence with a refined, professionally crafted website.",
    featured: false,
    includes: [
      "Responsive Website",
      "Premium UI Design",
      "Essential SEO",
      "Contact Forms",
      "Fast Performance",
    ],
    ideal: "New Businesses & Personal Brands",
  },
  {
    name: "SIGNATURE",
    title: "The Complete Brand Experience",
    description:
      "Designed for businesses ready to invest in a polished digital presence that builds trust, strengthens their brand, and drives growth.",
    featured: true,
    includes: [
      "Everything in Essential",
      "Custom Animations",
      "Advanced UI/UX",
      "Enhanced SEO",
      "Conversion-Focused Design",
      "Performance Optimization",
    ],
    ideal: "Growing Businesses",
  },
  {
    name: "AUREA",
    title: "Our Flagship Experience",
    description:
      "Our most detailed, strategic, and visually ambitious offering. Every element is thoughtfully crafted to create a truly exceptional digital experience tailored specifically to your brand.",
    featured: false,
    includes: [
      "Everything in Signature",
      "Complete Digital Strategy",
      "Bespoke Interactions",
      "Premium Motion Design",
      "Priority Revisions",
      "Long-Term Consultation",
    ],
    ideal: "Luxury Brands & Established Businesses",
  },
];

function Experience() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            CHOOSE YOUR EXPERIENCE
          </p>

          <h2
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            Tailored For
            <br />
            Every Ambition
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  duration: 0.22,
                },
              }}
              className={`flex h-full flex-col rounded-[32px] border p-10 backdrop-blur-xl ${
                plan.name === "AUREA"
                  ? "border-primary bg-primary/5"
                  : "border-white/10 bg-white/5"
              }`}
            >

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
                {plan.name}
              </p>

              <h3
                className="mb-5 text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem",
                }}
              >
                {plan.title}
              </h3>

              <p className="mb-10 min-h-[170px] leading-8 text-text-muted">
  {plan.description}
</p>

              <div className="mb-10">
                <h4 className="mb-5 text-sm uppercase tracking-[0.25em] text-primary">
                  What's Included
                </h4>

                <ul className="space-y-4">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-text-muted"
                    >
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-white/10 pt-8">
                <h4 className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">
                  Ideal For
                </h4>

                <p className="leading-7 text-white">
                  {plan.ideal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="text-lg leading-8 text-text-muted">
            Every project is unique. We tailor every proposal to your goals,
            requirements and timeline. Get in touch to receive a personalized
            recommendation and quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;