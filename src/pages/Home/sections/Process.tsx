import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, audience and objectives to build a clear strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Beautiful interfaces are crafted with user experience and brand identity at the core.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Every interaction is built with modern technologies for speed, quality and scalability.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and refinement, your website goes live and is ready to impress.",
  },
];

function Process() {
  return (
    <section className="relative py-40">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
            OUR PROCESS
          </p>

          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(3.5rem,6vw,5.8rem)",
            }}
          >
            From Vision
            <br />
            To Reality
          </h2>
        </motion.div>

        <div className="relative">

          {/* Gold Line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-primary/20 lg:block" />

          <div className="grid gap-16 lg:grid-cols-4">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative text-center lg:text-left"
              >
                {/* Circle */}
                <div className="relative z-10 mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-full border border-primary/40 bg-background lg:mx-0">
                  <span className="text-lg text-primary">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-5 text-3xl text-white">
                  {step.title}
                </h3>

                <p className="leading-8 text-text-muted">
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Process;