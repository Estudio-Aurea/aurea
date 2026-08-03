import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
            transition: {
              duration: 0.45,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#090909]"
        >
          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[700px] w-[700px] rounded-full bg-primary/20 blur-[170px]"
          />

          <div className="relative z-10 flex flex-col items-center">

            {/* Logo */}

            <div className="flex overflow-hidden px-6">
              {"ESTUDIO-AUREA".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2rem, 8vw, 5.5rem)",
                    letterSpacing: "clamp(.06em, .4vw, .18em)",
                    color: "white",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Gold Line */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                originX: 0,
              }}
              className="mt-8 h-px w-40 sm:w-[230px] bg-primary"
            />

            {/* Tagline */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.45,
              }}
              className="mt-8 px-6 text-center text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/60"
            >
              Crafting Digital Experiences
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;