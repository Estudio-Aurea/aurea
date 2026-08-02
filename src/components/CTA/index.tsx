import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden py-44">


      <div className="relative z-10 mx-auto max-w-5xl px-6 px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-primary">
            LET'S CREATE SOMETHING INCREDIBLE
          </p>

          <h2
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.5rem,7vw,6rem)",
            }}
          >
            Ready To Build
            <br />
            <span className="text-primary">
              Something Exceptional?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-text-muted">
            Every great brand deserves a website that inspires confidence,
            builds trust and leaves a lasting impression.
          </p>

          <Link
            to="/contact"
            className="mt-12 inline-flex rounded-xl bg-primary px-8 py-4 font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            Start Your Project
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;