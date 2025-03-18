"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 md:px-12 lg:px-24">
      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24 md:mt-32"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl">
          I&apos;m a developer passionate about building modern applications. I specialize in 
          front-end and back-end development, focusing on performance, accessibility, and
          clean, maintainable code.
        </p>
      </motion.section>

      {/* Technologies & Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-28 w-full max-w-5xl text-center"
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Technologies & Skills</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Here’s a breakdown of the technologies I use and my areas of expertise.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">JavaScript</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">TypeScript</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">React</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">Next.js</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">Node.js</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">Express.js</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">MySQL</span>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-28 w-full max-w-5xl text-center"
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Interested in collaborating? Feel free to reach out!
        </p>
        <div className="mt-6 space-x-6">
          <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">
            Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-blue-400 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </div>
      </motion.section>

      {/* Optional: Download CV Button */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a href="/your-cv.pdf" download className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
          Download My CV
        </a>
      </motion.section>

      {/* Padding at Bottom */}
      <div className="h-32"></div>
    </main>
  );
}
