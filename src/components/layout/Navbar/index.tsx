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
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4"
    >
      <div
        className={`relative w-full max-w-7xl overflow-visible rounded-[28px] transition-all duration-500
        ${
          scrolled
            ? "bg-black/65 backdrop-blur-[28px] border border-primary/25 shadow-[0_0_60px_rgba(201,168,103,0.12)]"
            : "bg-black/35 backdrop-blur-[24px] border border-white/15 shadow-[0_0_30px_rgba(255,255,255,0.04)]"
        }`}
      >
        {/* Glass Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

        {/* Top Reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent" />

        <div
          className={`relative flex items-center justify-between px-8 transition-all duration-500 ${
            scrolled ? "h-[72px]" : "h-20"
          }`}
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
  }}
>
  <motion.img
    src={Logo}
    alt="Aurea"
    className="h-16 w-auto"
    whileHover={{
      scale: 1.05,
    }}
    transition={{
      duration: 0.25,
    }}
  />
</Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-white/80 hover:text-primary"
                  }`
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
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl"
  >
    <motion.span
      animate={{
        rotate: menuOpen ? 90 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="text-2xl leading-none"
    >
      {menuOpen ? "✕" : "☰"}
    </motion.span>
  </button>
</div>

          {/* CTA */}
          <motion.div
  className="hidden md:block"
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{
    scale: 0.98,
  }}
>
  <Link
    to="/contact"
    onClick={(e) => handleNavClick(e, "/contact")}
    className="rounded-xl border border-primary bg-primary/10 px-6 py-2 text-sm font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-xl transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(201,168,103,0.3)]"
  >
    Inquire Now
  </Link>
</motion.div>
</div>

{/* MOBILE MENU */}

<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.3 }}
      className="
        md:hidden
        absolute
        top-full
        left-0
        mt-4
        w-full
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-black/80
        backdrop-blur-3xl
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      "
    >
      <nav className="flex flex-col py-6">

        {navLinks.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-8 py-5 text-center text-sm uppercase tracking-[0.3em] transition ${
                isActive
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`
            }
          >
            {link.name}
          </NavLink>

        ))}

        <div className="px-6 pt-4">

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              block
              rounded-xl
              border
              border-primary
              bg-primary/10
              px-6
              py-4
              text-center
              uppercase
              tracking-[0.2em]
              text-primary
              transition
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