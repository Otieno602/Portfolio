import React from "react";
import mangala from "../assets/images/mangala.jpg";
import { motion } from "framer-motion";

const Home = () => {
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
          A passionate full-stack developer with a keen eye for detail and a
          strong commitment to building functional, responsive and visually
          appealing websites.
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
        className="min-h-screen flex items-center justify-center bg-neutral-200"
      >
        <h2 className="text-3xl font-semibold text-center">About Me</h2>
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
