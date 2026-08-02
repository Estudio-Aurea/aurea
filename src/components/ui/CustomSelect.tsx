import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label?: string;
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("click", handleClick);

    return () =>
      window.removeEventListener("click", handleClick);
  }, []);

  const selected =
    options.find((o) => o.value === value)?.label ||
    placeholder;

  return (
    <div ref={ref} className="relative">

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        className="
group
relative
flex
w-full
items-center
justify-between
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
px-6
py-4
text-left
text-white
transition-all
duration-300
hover:border-primary/35
hover:bg-white/[0.06]
"
      >
        <span
          className={
            value
              ? "text-white"
              : "text-white/40"
          }
        >
          {selected}
        </span>

        <motion.svg
  animate={{
    rotate: open ? 180 : 0,
  }}
  transition={{
    duration: 0.25,
  }}
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className="text-primary"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M19 9l-7 7-7-7"
  />
</motion.svg>
      </motion.button>

      <AnimatePresence>

        {open && (

          <motion.div
          initial={{
            opacity: 0,
            y: 8,
            scale: 0.98,
          }}
          
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          
          exit={{
            opacity: 0,
            y: 8,
            scale: 0.98,
          }}
            transition={{
              duration: 0.2,
            }}
            className="
absolute
z-50
mt-3
w-full
overflow-hidden
rounded-2xl
border
border-primary/15
bg-[#111111]/90
backdrop-blur-3xl
shadow-[0_30px_80px_rgba(0,0,0,0.45)]
"
          >
            {options.map((option, index) => (

<motion.button
  key={option.value}
  initial={{
    opacity: 0,
    x: -12,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    delay: index * 0.05,
  }}
  type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className="
flex
w-full
items-center
justify-between
px-6
py-4
text-left
text-white/75
transition-all
duration-200
hover:bg-primary
hover:text-black
"
              >
                <>
  <span>{option.label}</span>

  {value === option.value && (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="text-current"
    >
      ✓
    </motion.span>
  )}
</>
              </motion.button>

            ))}
          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default CustomSelect;