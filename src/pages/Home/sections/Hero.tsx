import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

import Laptop from "../../../assets/images/Laptop.png";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[42%_58%]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
              ESTUDIO AUREA
            </p>

            <h1 className="leading-[0.9]">
              <span
                className="block text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "clamp(2.2rem,2.8vw,3rem)",
                }}
              >
                WE DESIGN WEBSITES
              </span>

              <span
                className="block text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "clamp(4rem,6vw,6rem)",
                }}
              >
                THAT ELEVATE
              </span>

              <span
                className="block text-primary"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "clamp(4rem,6vw,6rem)",
                }}
              >
                BRANDS
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-text-muted">
              Premium websites designed to elevate your brand, build trust,
              and create memorable digital experiences.
            </p>

            <div className="mt-10 flex gap-5">
  <Button to="/portfolio">
    View Portfolio
  </Button>

  <Button
    variant="secondary"
    to="/contact"
  >
    Start Project
  </Button>
</div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative flex justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {/* Small glow behind laptop */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-primary/10 blur-[140px]" />

            
            <motion.img
              src={Laptop}
              alt="Aurea Laptop"
              className="relative z-10 w-full max-w-[780px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.7)]"
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;