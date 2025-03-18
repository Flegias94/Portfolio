"use client"; // Needed for animations

import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const projects = [
    { title: "Project One", description: "A cool project.", link: "#" },
    { title: "Project Two", description: "Another cool project.", link: "#" },
    { title: "Project Three", description: "Yet another one!", link: "#" },
    { title: "Project Four", description: "Something new.", link: "#" },
    { title: "Project Five", description: "Another awesome project.", link: "#" },
    { title: "Project Six", description: "A project to showcase.", link: "#" },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen px-6 md:px-12 lg:px-24">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24 md:mt-32"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl">
          I&apos;m a passionate developer with experience in building modern web applications.
          Here you&apos;ll find a collection of my projects, ranging from web development to backend systems. 
          Each project showcases different aspects of my skills and problem-solving abilities.
        </p>
      </motion.section>

      {/* Preferred Tech Stack (Preview) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-28 w-full max-w-5xl text-center"
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Preferred Tech Stack</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          These are some of my favorite technologies. For a full breakdown, check out the <a href="/about" className="text-blue-400 hover:underline">About Me</a> page!
        </p>
        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">JavaScript</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">TypeScript</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">React</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">Next.js</span>
          <span className="px-4 py-2 bg-gray-800 text-white rounded-md">Tailwind CSS</span>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-28 w-full max-w-5xl text-center px-6"
      >
        <h2 className="text-3xl font-semibold text-white mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
