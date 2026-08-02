import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;