import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Center glow */}
      <motion.div
  className="
    absolute
    left-[65%] md:left-1/2
    top-[42%] md:top-1/2
    h-[650px] w-[650px]
    md:h-[900px] md:w-[900px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-primary/5
    blur-[220px] md:blur-[250px]
  "
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* Top left */}
      <motion.div
       className="
       absolute
       -left-64 md:-left-56
       -top-56 md:-top-44
       h-[500px] w-[500px]
       md:h-[700px] md:w-[700px]
       rounded-full
       bg-primary/4
       blur-[180px] md:blur-[220px]
       "
        animate={{
          x: [-30, 20, -30],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom right */}
      <motion.div
        className="
        absolute
        -right-64 md:-right-52
        -bottom-56 md:bottom-[-150px]
        h-[500px] w-[500px]
        md:h-[650px] md:w-[650px]
        rounded-full
        bg-primary/4
        blur-[180px] md:blur-[220px]
        "
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default Background;