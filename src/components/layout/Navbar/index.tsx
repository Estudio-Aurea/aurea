import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../../../assets/images/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) {
    if (location.pathname === path) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 md:px-8"
    >
      <div
        className={`
          relative
          w-full
          max-w-7xl
          overflow-visible
          rounded-[26px]
          border
          transition-all
          duration-500

          ${
            scrolled
              ? "border-primary/20 bg-black/65 backdrop-blur-[30px] shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
              : "border-white/10 bg-black/40 backdrop-blur-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          }
        `}
      >
        {/* Reflection */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">
          <div className="absolute inset-x-6 top-0 h-px rounded-full bg-white/15" />

          <div className="absolute inset-0 rounded-[26px] bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
        </div>

        <div
          className={`
            relative
            flex
            items-center
            justify-between
            px-5
            md:px-8
            transition-all
            duration-500

            ${
              scrolled
                ? "h-[60px] md:h-[74px]"
                : "h-[66px] md:h-[82px]"
            }
          `}
        >
          {/* Logo */}

          <Link
            to="/"
            className="flex items-center"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }

              setMenuOpen(false);
            }}
          >
            <motion.img
              src={Logo}
              alt="Aurea"
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.25,
              }}
              className="h-11 md:h-16 w-auto select-none"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={({ isActive }) =>
                  `
                  relative
                  text-sm
                  uppercase
                  tracking-[0.22em]
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-primary"
                      : "text-white/80 hover:text-primary"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 h-px w-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 90 : 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="text-2xl text-white"
            >
              {menuOpen ? "✕" : "☰"}
            </motion.span>
          </button>

          {/* CTA */}

          <motion.div
            className="hidden md:block"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="
                rounded-xl
                border
                border-primary
                bg-primary/10
                px-6
                py-2
                text-sm
                font-medium
                uppercase
                tracking-[0.18em]
                text-primary
                transition-all
                duration-300
                hover:bg-primary
                hover:text-black
                hover:shadow-[0_0_25px_rgba(201,168,103,0.3)]
              "
            >
              Inquire Now
            </Link>
          </motion.div>
        </div>

        {/* MOBILE MENU */}

                {/* MOBILE MENU */}

                <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -18,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                right-0
                top-[calc(100%+14px)]
                md:hidden
                overflow-hidden
                rounded-[26px]
                border
                border-white/10
                bg-black/75
                backdrop-blur-[28px]
                shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              "
            >
              {/* Reflection */}

              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">
                <div className="absolute inset-x-5 top-0 h-px rounded-full bg-white/15" />

                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
              </div>

              <nav className="relative flex flex-col py-4">

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      x: -18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className={({ isActive }) =>
                        `
                          flex
                          justify-center
                          px-8
                          py-4
                          text-sm
                          uppercase
                          tracking-[0.28em]
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-primary"
                              : "text-white hover:text-primary"
                          }
                        `
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="px-5 pt-3">
                  <Link
                    to="/contact"
                    onClick={(e) => handleNavClick(e, "/contact")}
                    className="
                      flex
                      h-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary
                      bg-primary/10
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-primary
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-black
                    "
                  >
                    Inquire Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}

export default Navbar;