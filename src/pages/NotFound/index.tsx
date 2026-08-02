import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Layout from "../../components/layout/Layout";

function NotFound() {
  return (
    <Layout>
      <section className="flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-2xl text-center"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-primary">
            404
          </p>

          <h1
            className="leading-none text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(4rem,9vw,7rem)",
            }}
          >
            Page
            <br />
            Not Found
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-text-muted">
            The page you're looking for doesn't exist,
            has been moved, or is no longer available.
          </p>

          <Link
            to="/"
            className="
              mt-12
              inline-flex
              rounded-2xl
              bg-primary
              px-8
              py-4
              font-medium
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(201,168,103,0.35)]
            "
          >
            Return Home
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}

export default NotFound;