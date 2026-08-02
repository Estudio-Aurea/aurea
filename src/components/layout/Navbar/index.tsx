import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
        className={`relative w-full max-w-7xl overflow-hidden rounded-[28px] transition-all duration-500
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

          {/* CTA */}
          <motion.div
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
      </div>
    </motion.header>
  );
}

export default Navbar;