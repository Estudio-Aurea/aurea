import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder • Nova Studio",
    review:
      "Working with Aurea completely transformed our online presence. The attention to detail and premium design exceeded every expectation.",
  },
  {
    name: "Daniel Carter",
    role: "CEO • Apex Digital",
    review:
      "The website feels luxurious, fast and perfectly represents our brand. We've received compliments from clients since launch.",
  },
  {
    name: "Emma Wilson",
    role: "Creative Director • Lumière",
    review:
      "Professional, creative and incredibly smooth to work with. Aurea delivered exactly the experience we were hoping for.",
  },
];

function Reviews() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            TESTIMONIALS
          </p>

          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,6vw,5.5rem)",
            }}
          >
            Trusted By
            <br />
            Visionary Brands
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .7,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(201,168,103,.12)]"
            >

              {/* Quote */}

              <div className="absolute right-8 top-4 text-[7rem] leading-none text-primary/10">
                "
              </div>

              {/* Stars */}

              <div className="mb-8 flex gap-1 text-primary text-xl">
                ★★★★★
              </div>

              {/* Review */}

              <p className="relative z-10 text-lg leading-8 text-text-muted">
                {review.review}
              </p>

              {/* Client */}

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-black">
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-lg text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-text-muted">
                    {review.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;