import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Essential from "../../../assets/images/projects/GAI-Foods.png";
import Signature from "../../../assets/images/projects/FuelD.png";
import Aurea from "../../../assets/images/projects/Signature.png";

const projects = [
  {
    title: "Essential",
    category: "Business Website",
    image: Essential,
    url: "https://saminnanwarr-source.github.io/gai-food-ind/",
  },
  {
    title: "Signature",
    category: "E-Commerce Store",
    image: Signature,
    url: "https://fueld.netlify.app",
  },
  {
    title: "AUREA",
    category: "Informative Website",
    image: Aurea,
    url: "https://signature-ten-ruddy.vercel.app/",
  },
];

function FeaturedWork() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            FEATURED WORK
          </p>

          <h2
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,6vw,5.5rem)",
            }}
          >
            Recent
            <br />
            Projects
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Project Image */}
<div className="relative h-[260px] overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  {/* Dark Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
</div>

              {/* Content */}
              <div className="p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
                  {project.category}
                </p>

                <h3 className="mb-6 text-2xl text-white">
                  {project.title}
                </h3>

                <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-primary transition duration-300 hover:translate-x-1"
>
  Explore Project ↗
</a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/portfolio"
            className="rounded-xl border border-primary px-8 py-4 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;