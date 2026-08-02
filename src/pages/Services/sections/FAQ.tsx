import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most Aurea projects are completed within 2–6 weeks depending on the size and complexity of the website.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign outdated websites into modern, high-performing digital experiences while preserving your brand identity.",
  },
  {
    question: "Will my website work on all devices?",
    answer:
      "Yes. Every Aurea website is fully responsive and carefully optimized for desktop, tablet and mobile devices.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We offer post-launch support, maintenance and future improvements so your website continues to perform at its best.",
  },
  {
    question: "Can you build custom functionality?",
    answer:
      "Definitely. Whether it's booking systems, client portals, custom integrations or unique interactions, every project can be tailored to your requirements.",
  },
];

function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            FAQ
          </p>

          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            Frequently Asked
            <br />
            Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                    }}
                  >
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="text-primary" size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-8 pb-8">
                        <p className="leading-8 text-text-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;