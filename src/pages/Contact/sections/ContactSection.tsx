import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import CustomSelect from "../../../components/ui/CustomSelect";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const serviceOptions = [
    {
      label: "Essential Website",
      value: "Essential",
    },
    {
      label: "Signature Website",
      value: "Signature",
    },
    {
      label: "AUREA Premium",
      value: "AUREA",
    },
  ];
  
  const budgetOptions = [
    {
      label: "$500 – $1,000",
      value: "$500-$1000",
    },
    {
      label: "$1,000 – $2,500",
      value: "$1000-$2500",
    },
    {
      label: "$2,500 – $5,000",
      value: "$2500-$5000",
    },
    {
      label: "$5,000+",
      value: "$5000+",
    },
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        "service_4u2vt9h",
        "template_o8h4try",
        form,
        "217qBPzOVQzL5bZZF"
      );

      alert("Inquiry sent successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }

    setSending(false);
  }
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">
            START YOUR PROJECT
          </p>

          <h2
            className="mb-8 leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem,5vw,5rem)",
            }}
          >
            Let's Build
            <br />
            Something Exceptional
          </h2>

          <p className="max-w-lg leading-8 text-text-muted">
            Every exceptional website begins with a conversation.
            Whether you're launching a new business or elevating an
            established brand, we'd love to hear about your vision.
          </p>

          <div className="mt-16 space-y-10">

            <div>
              <p className="mb-2 uppercase tracking-[0.25em] text-primary text-sm">
                Email
              </p>

              <p className="text-white/80">
                hello@aureastudio.com
              </p>
            </div>

            <div>
              <p className="mb-2 uppercase tracking-[0.25em] text-primary text-sm">
                Response Time
              </p>

              <p className="text-white/80">
                Usually within 24 hours
              </p>
            </div>

            <div>
              <p className="mb-2 uppercase tracking-[0.25em] text-primary text-sm">
                Location
              </p>

              <p className="text-white/80">
                Pakistan • Working Worldwide
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <form
  onSubmit={handleSubmit}
  className="space-y-6"
>

<input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  required
  className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white outline-none transition focus:border-primary/40"
/>

<input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  required
  className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white outline-none transition focus:border-primary/40"
/>

<input
  type="text"
  name="company"
  value={form.company}
  onChange={handleChange}
  placeholder="Company (Optional)"
  className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white outline-none transition focus:border-primary/40"
/>

<CustomSelect
  placeholder="Select Service"
  options={serviceOptions}
  value={form.service}
  onChange={(value) =>
    setForm({
      ...form,
      service: value,
    })
  }
/>

<CustomSelect
  placeholder="Estimated Budget"
  options={budgetOptions}
  value={form.budget}
  onChange={(value) =>
    setForm({
      ...form,
      budget: value,
    })
  }
/>

<textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  rows={7}
  required
  placeholder="Tell us about your project..."
  className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white outline-none transition focus:border-primary/40 resize-none"
/>

<button
  type="submit"
  disabled={sending}
  className="
    w-full
    rounded-2xl
    bg-primary
    py-4
    font-medium
    text-black
    transition
    duration-300
    hover:scale-[1.02]
    disabled:opacity-60
  "
>
  {sending ? "Sending..." : "Send Inquiry"}
</button>

            </form>

        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;