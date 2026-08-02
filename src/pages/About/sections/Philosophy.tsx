import { motion } from "framer-motion";

const philosophy = [
  {
    title: "Strategy",
    description:
      "Every successful website begins with understanding your business, your audience, and your goals.",
  },
  {
    title: "Design",
    description:
      "We create timeless, elegant interfaces that strengthen your brand and build trust from the first interaction.",
  },
  {
    title: "Development",
    description:
      "Using modern technologies, we build fast, responsive websites that perform flawlessly on every device.",
  },
];

function Philosophy() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            OUR PHILOSOPHY
          </p>

          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,4.8rem)",
            }}
          >
            Built Around
            <br />
            Excellence
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                    duration: 0.22,
                    ease: "easeOut",
                },
              }}
             className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl hover:border-primary/30"
            >
              <div className="mb-8 h-12 w-12 rounded-full bg-primary/15" />

              <h3 className="mb-5 text-3xl text-white">
                {item.title}
              </h3>

              <p className="leading-8 text-text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Philosophy;