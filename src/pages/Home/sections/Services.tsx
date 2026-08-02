import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Modern, responsive websites crafted to capture attention and convert visitors into customers.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, scalable and fully custom websites built with the latest technologies for outstanding performance.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Luxury branding systems that create a memorable visual identity across every digital touchpoint.",
  },
];

function Services() {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-primary text-sm">
            OUR SERVICES
          </p>

          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,6vw,5.5rem)",
            }}
          >
            Crafted For
            <br />
            Exceptional Brands
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary/40 hover:bg-white/10"
            >
              <p className="mb-8 text-5xl font-light text-primary/60">
                {service.number}
              </p>

              <h3 className="mb-5 text-3xl text-white">
                {service.title}
              </h3>

              <p className="leading-8 text-text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;