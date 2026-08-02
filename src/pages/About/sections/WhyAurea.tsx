import { motion } from "framer-motion";

const features = [
  "Premium Design",
  "Fast Performance",
  "Responsive Development",
  "SEO Optimized",
  "Modern Technologies",
  "Long-Term Support",
];

function WhyAurea() {
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[45%_55%]">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            WHY AUREA
          </p>

          <h2
            className="mb-8 text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,4.8rem)",
            }}
          >
            Built For
            <br />
            Ambitious Brands
          </h2>

          <p className="leading-8 text-text-muted">
            We don't simply design beautiful websites. Every decision is made
            with purpose—creating digital experiences that inspire confidence,
            strengthen your brand, and support long-term business growth.
          </p>
        </motion.div>

        {/* Right */}

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: {
                  duration: 0.22,
                  ease: "easeOut",
                },
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-primary/30"
              
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                ✓
              </div>

              <h3 className="text-lg text-white">
                {feature}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyAurea;