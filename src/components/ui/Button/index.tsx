import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
}

function Button({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-4 font-medium tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-primary text-black shadow-[0_0_30px_rgba(201,168,103,0.15)] hover:shadow-[0_0_45px_rgba(201,168,103,0.35)]",

    secondary:
      "border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:border-primary/50 hover:text-primary",
  };

  const content = (
    <>
      {/* Shine */}
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.span
          className="absolute left-[-150%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          whileHover={{
            left: "150%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </span>

      <span className="relative z-10">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
      >
        <Link
          to={to}
          className={`${base} ${variants[variant]} ${className}`}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;