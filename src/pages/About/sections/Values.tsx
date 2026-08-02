import { motion } from "framer-motion";

const values = [
  {
    title: "Attention to Detail",
    description:
      "Every element is carefully considered, from typography to interaction, ensuring a polished final product.",
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed throughout the entire process with clear collaboration and honest feedback.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We believe every project is an opportunity to refine, innovate, and deliver something even better.",
  },
];

function Values() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            OUR VALUES
          </p>

          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,4.8rem)",
            }}
          >
            Principles That
            <br />
            Guide Every Project
          </h2>
        </motion.div>

        <div className="space-y-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.2,
                },
              }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-primary/30"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <h3 className="text-2xl text-white">
                  {value.title}
                </h3>

                <p className="max-w-2xl leading-8 text-text-muted">
                  {value.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Values;