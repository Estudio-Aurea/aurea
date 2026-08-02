import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Center glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[250px]"
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
        className="absolute -left-56 -top-44 h-[700px] w-[700px] rounded-full bg-primary/4 blur-[220px]"
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
        className="absolute -right-52 bottom-[-150px] h-[650px] w-[650px] rounded-full bg-primary/4 blur-[220px]"
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