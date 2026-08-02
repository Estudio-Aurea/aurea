import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}

function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-44 pb-28">

      <div className="mx-auto max-w-6xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>

          <h1
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            {title}

            <br />

            <span className="text-primary">
              {highlight}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-muted">
            {description}
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default PageHero;