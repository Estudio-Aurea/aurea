import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-[1.3fr_1fr_1fr]"
        >

          {/* Brand */}

          <div>
            <h2
              className="mb-5 text-primary tracking-[0.35em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.2rem",
              }}
            >
              AUREA
            </h2>

            <p className="max-w-sm leading-8 text-text-muted">
              Crafting premium digital experiences that elevate ambitious
              brands through thoughtful design and modern development.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-6 text-lg text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-text-muted transition hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-6 text-lg text-white">
              Connect
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/estudio.aurea._/?hl=en"
                className="text-text-muted transition hover:text-primary"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-text-muted transition hover:text-primary"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-text-muted transition hover:text-primary"
              >
                Behance
              </a>
            </div>
          </div>

        </motion.div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-text-muted md:flex-row">

          <p>
            © 2026 Aurea. All rights reserved.
          </p>

          <p>
            Designed & Developed by Aurea
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;