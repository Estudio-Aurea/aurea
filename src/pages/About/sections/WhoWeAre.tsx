import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            WHO WE ARE
          </p>

          <h2
            className="mb-8 text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem,5vw,4.5rem)",
            }}
          >
            More Than
            <br />
            Just Designers
          </h2>

          <p className="mb-6 leading-8 text-text-muted">
            Aurea is a modern web design studio focused on creating premium
            digital experiences that blend strategy, creativity and technology.
          </p>

          <p className="leading-8 text-text-muted">
            Every project is carefully crafted to build trust, strengthen your
            brand and help your business stand out in a crowded digital world.
          </p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="flex h-[420px] w-full items-center justify-center rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <span className="tracking-[0.3em] text-text-muted uppercase">
              Studio Image
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhoWeAre;