import React from "react";
import mangala from "../assets/images/mzinglo.jpeg";
import screenshot from "../assets/images/birthdayrem.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { Download } from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLaptopCode,
  FaComments,
  FaShoppingCart,
  FaSearch,
  FaServer,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
} from "react-icons/si";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    {
      title: "Website Design & Development",
      description:
        "Crafting clean and responsive websites tailored for individuals, businesses, and startups that not only attract but also covert.",
      icon: FaLaptopCode,
    },
    {
      title: "Consultancy",
      description:
        "Delivering exceptional support to help customers spot what is missing or what could be done better.",
      icon: FaComments,
    },
    {
      title: "Ecommerce Solutions",
      description:
        "Enhancing seamless ecommerce experiences, ensuring customers dont just add to their cart but complete purchase.",
      icon: FaShoppingCart,
    },
    {
      title: "SEO Optimization",
      description:
        "Developing custom titles, descriptions and preview content to help your site stand out on search engines.",
      icon: FaSearch,
    },
    {
      title: "Custom Backend APIs",
      description:
        "Shaping backend systems using Node.js, Express and MongoDB.",
      icon: FaServer,
    },
    {
      title: "Authentication Systems",
      description:
        "Implementing secure user login, signup and password reset flows using modern authentication",
      icon: FaLock,
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        id="hero"
        className="py-8 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 space-y-4 bg-neutral-100 max-w-3xl mx-auto"
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
          Hi, I'm Ronald 👋🏿
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-neutral-700 mb-6 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          I turn offline ideas into online tools - websites, systems and
          strategies that work for you 24/7.
        </motion.p>
        <div className="flex items-center gap-6 mt-6">
          <motion.a
            href="#projects"
            className="mt-4 inline-block bg-red-700 text-white px-6 py-3 rounded-2xl text-lg hover:bg-red-800 transition duration-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/Mangala_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferer"
            className="mt-4 flex items-center gap-4 border border-red-700 text-red-600 px-6 py-3 rounded-2xl text-lg hover:bg-red-700 hover:text-white transition shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          >
            <Download size={18} />
            Resume
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-white text-neutral-900 py-8 px-4 sm:px-8 max-w-4xl mx-auto"
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
        className="bg-neutral-100 text-neutral-900 py-8 px-4 sm:px-8 max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills and Tools
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {[
            { icon: <FaHtml5 className="text-orange-600" />, label: "HTML" },
            { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS" },
            {
              icon: <SiTailwindcss className="text-sky-400" />,
              label: "Tailwind",
            },
            { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
            { icon: <FaReact className="text-cyan-400" />, label: "React" },
            { icon: <FaNodeJs className="text-green-700" />, label: "Node.js" },
            {
              icon: <SiExpress className="text-neutral-800" />,
              label: "Express",
            },
            {
              icon: <SiMongodb className="text-green-600" />,
              label: "MongoDB",
            },
            { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
            {
              icon: <SiPostman className="text-orange-500" />,
              label: "Postman",
            },
            { icon: <SiVite className="text-purple-500" />, label: "Vite" },
            {
              icon: <FaGithub className="text-neutral-800" />,
              label: "GitHub",
            },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl text-red-700 mb-2">
                {icon}
              </div>
              <p className="text-sm sm:text-base font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h2>

          {/* Birthday Reminder Project */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-100 rounded-2xl shadow p-6 mb-8">
            <img
              src={screenshot}
              alt="Birthday Reminder App"
              className="w-full md:w-1/2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Birthday Reminder App
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700">
                  React
                </span>
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700">
                  Node.js
                </span>
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700">
                  Express
                </span>
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700">
                  MongoDB
                </span>
              </div>

              <p className="mt-3 text-gray-600">
                I am a member of a crew known as The Clan and in this group we
                always celebrate each member’s birthday. If you forget or are
                late, there's a fine! Since I usually forget, I built a web
                application that sends monthly, 3-day, and same-day birthday
                reminders. It started as a personal tool, but now anyone can use
                it for free.
              </p>

              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href="https://birthdaybash-reminderapp.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-base hover:bg-red-700"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Placeholder Project Card */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-6">
            <div className="w-full md:w-1/2">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg font-medium">
                Project Screenshot Coming Soon
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                Next Project Loading...
              </h3>
              <p className="mt-3 text-gray-600">
                I’m currently working on my next full-stack project. It will be
                added here soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">What I Offer</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 ">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind? Fill out the form below and I’ll get back to
            you as soon as possible.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              const form = e.target;
              const data = new FormData(form);

              try {
                const response = await fetch(
                  "https://formspree.io/f/mwpbepbd",
                  {
                    method: "POST",
                    body: data,
                    headers: {
                      Accept: "application/json",
                    },
                  }
                );

                if (response.ok) {
                  toast.success("Message sent succesfully.");
                  form.reset();
                } else {
                  toast.error("Something went wrong. Please try again.");
                }
              } catch (error) {
                toast.error("Network error. Please try again later");
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-6 text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-neutral-400 text-center py-8">
        <div className="text-lg font-semibold mb-4">Connect with me</div>
        <div className="flex justify-center space-x-6 text-3xl text-red-600">
          <a
            href="https://github.com/Otieno602"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-black transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/ronald-otieno-8a7a91368"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-black transition" />
          </a>
          <a
            href="https://www.facebook.com/wayne.ronnie.58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-black transition" />
          </a>
        </div>
        <p className="text-sm text-black mt-4">
          © {new Date().getFullYear()} BuiltByMangala.dev
        </p>
      </footer>
    </div>
  );
};

export default Home;
