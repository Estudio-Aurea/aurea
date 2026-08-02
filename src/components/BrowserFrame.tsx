import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface BrowserFrameProps {
  title: string;
  url: string;
  children?: ReactNode;
}

function BrowserFrame({ title, url }: BrowserFrameProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  }

  function resetTilt() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1600,
      }}
      className="group relative"
    >
      {/* Gold Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/15
          blur-[140px]
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Browser */}

      <motion.div
  initial={{
    opacity: 0,
    scale: 0.96,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  }}
  whileHover={{
    y: -8,
    scale: 1.01,
  }}
  viewport={{
    once: true,
    amount: 0.35,
  }}
  transition={{
    duration: 0.8,
  }}                  
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-white/15
transition-all
duration-500
group-hover:border-primary/30
          bg-[#0D0D0D]
          shadow-[0_35px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.03)]
        "
      >
        {/* Browser Toolbar */}

<div
  className="
    flex
    items-center
    gap-5
    border-b
    border-white/15
transition-all
duration-500
group-hover:border-primary/30
    bg-gradient-to-b
    from-white/[0.07]
    to-white/[0.03]
    px-7
    py-5
    backdrop-blur-2xl
  "
>

  {/* Traffic Lights */}

  <div className="flex gap-2">

    <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />

    <div className="h-3 w-3 rounded-full bg-[#febc2e]" />

    <div className="h-3 w-3 rounded-full bg-[#28c840]" />

  </div>

  {/* Address Bar */}

  <div
    className="
      flex-1
      rounded-full
      border
      border-white/15
group-hover:border-primary/30
      bg-black/30
      px-5
      py-2
      text-center
      text-[11px]
      tracking-wide
      text-white/50
      transition-all
      duration-500
      group-hover:border-primary/25
      group-hover:text-white/70
    "
  >
    <span className="mr-2 text-green-400">●</span>
    {title}
  </div>

</div>

        {/* Glass Reflection */}

<div
  className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
  "
>
  <div
    className="
      absolute
      -left-1/2
      top-0
      h-full
      w-1/3
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      opacity-0
      transition-all
      duration-700
      group-hover:left-[140%]
      group-hover:opacity-100
    "
  />
</div>

        {/* Website */}

        <div className="p-3 bg-[#0D0D0D]">
  <iframe
    src={url}
    title={title}
    loading="lazy"
    className="
      aspect-[16/10]
      w-full
      rounded-[18px]
      bg-white
      transition-transform
      duration-700
      group-hover:scale-[1.01]
    "
  />
</div>

      </motion.div>
    </motion.div>
  );
}

export default BrowserFrame;