import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We take the time to understand your business, audience, competitors and objectives before a single pixel is designed.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Together we define the website structure, user journey and content strategy to create a clear path toward your goals.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Every interface is carefully crafted to reflect your brand while delivering an elegant and memorable user experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Using modern technologies, your website is built to be responsive, fast, scalable and easy to maintain.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After extensive testing and refinement, your website is launched with confidence and ready to make an impact.",
  },
];

function Process() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            OUR PROCESS
          </p>

          <h2
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            A Refined Process
            <br />
            Built Around Results
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-[26px] top-0 h-full w-px bg-white/10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="relative mb-20 flex gap-10 last:mb-0"
            >
              {/* Timeline Dot */}

              <div className="relative z-10 mt-2 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background">
                <span className="text-sm font-semibold text-primary">
                  {step.number}
                </span>
              </div>

              {/* Content */}

              <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07]">
                <h3
                  className="mb-4 text-white"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.3rem",
                  }}
                >
                  {step.title}
                </h3>

                <p className="max-w-2xl leading-8 text-text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;