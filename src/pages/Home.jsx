import React from "react";
import mangala from "../assets/images/mangala.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pt-24 space-y-40">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 space-y-4 bg-neutral-100 max-w-3xl mx-auto"
      >
        <motion.img
          src={mangala}
          alt="Portrait of Mangala, full-stack web developer"
          className="w-full max-w-[220px] aspect-[3/4] rounded-2xl object-cover border-4 mb-6 shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        />
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 text-neutral-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          Hi, I'm <span className="text-red-700">Mangala</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-neutral-700 mb-6 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          A passionate Web developer with a keen eye for detail and a strong
          commitment to building functional, responsive and visually appealing
          websites.
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-4 inline-block bg-red-700 text-white px-6 py-3 rounded-2xl text-lg hover:bg-red-800 transition duration-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-white text-neutral-900 py-16 px-4 sm:px-8 max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="text-base sm:text-lg leading-relaxed text-neutral-800 space-y-6">
          <p>
            My name is <span className="font-semibold">Ronald Otieno</span> —
            though most people know me as{" "}
            <span className="text-red-700 font-semibold">Mangala</span>.
          </p>
          <p>
            After graduating with a diploma in ICT, I dove headfirst into web
            development, driven by a passion to create tools that are not just
            functional, but meaningful.
          </p>
          <p>
            Through real-world projects and continuous practise, I’ve grown into
            a <strong>full-stack developer</strong> who values simplicty,
            perfomance, and meaningful user experience.
          </p>
          <AnimatePresence>
            {showMore && (
              <motion.div
                key="moreText"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="space-y-6">
                  <p>
                    My journey has shaped a strong sense of creativity,
                    resilience, and attention to detail — qualities I bring into
                    every project I work on.
                  </p>
                  <p>
                    Whether it’s crafting user-friendly interfaces or designing
                    efficient backend systems, I aim to build digital
                    experiences that solve real world problems.
                  </p>
                  <p>
                    I’m currently focused on building personalized apps that
                    reflect real stories and connect deeply with users. I
                    believe every build whether crafted in code or design is an
                    opportunity to make something{" "}
                    <span className="italic">
                      genuine, human, and impactful
                    </span>
                    .
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 text-red-700 font-medium hover:underline focus:outline-none"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={showMore ? "less" : "more"}
                initial={{ opacity: 0, rotate: -10, scale: 0.95 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {showMore ? "Show Less" : "Read More"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-neutral-100"
      >
        <h2 className="text-3xl font-semibold text-center">My Skills</h2>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-neutral-200"
      >
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-neutral-100"
      >
        <h2 className="text-3xl font-semibold text-center">Services</h2>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="min-h-screen flex items-center justify-center bg-neutral-200"
      >
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
      </section>
    </div>
  );
};

export default Home;
