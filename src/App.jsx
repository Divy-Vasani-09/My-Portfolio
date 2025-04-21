import { motion } from "framer-motion";
import React from "react";
import "./index.css";
import Me from "./assets/me.jpg";

import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 text-gray-800 min-h-screen font-sans">
      <header className="text-center py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 text-black rounded-b-3xl shadow-xl">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Divy's Creative Portfolio
        </motion.h1>
        <p className="text-lg mt-3 text-black/90 italic">
          Crafting pixels & building experiences
        </p>
      </header>

      <main className="max-w-6xl mx-auto mt-12 space-y-24 px-4">
        {/* Hero Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={Me}
            alt="Divy Vasani profile"
            className="w-40 h-40 rounded-full shadow-xl mx-auto md:mx-0"
          />
          <div>
            <h2 className="text-4xl font-bold mb-3">Hi, I'm Divy Vasani </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              A creative frontend developer with a passion for building
              stunning, responsive, and engaging web experiences. Let’s make the
              web a more beautiful place together.
            </p>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="bg-white/90 p-8 rounded-3xl shadow-2xl border border-purple-200 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-purple-300 pb-2">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Saffron Crown"
              description="Food/Table Booking with HTML + CSS + JS."
              image={project1}
            />
            <ProjectCard
              title="<PassOP/>"
              description="Password manager using React + Node + MongoDB."
              image={project2}
            />
            <ProjectCard
              title="MyChatMX"
              description="Real-time chat web application with one to one chat & voice call."
              image={project3}
            />
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="bg-white/90 p-8 rounded-3xl shadow-2xl border border-pink-200"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-pink-300 pb-2">
            Experience
          </h2>
          <div>
            <h3 className="font-semibold text-xl">
              NIQOX Company - Frontend Developer Intern
            </h3>
            <p className="text-sm text-gray-500">Dec 2024 - Apr 2025</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>Created beautiful UI components using React and Tailwind</li>
              <li>Integrated backend APIs and improved dashboard interactivity</li>
              <li>Enhanced mobile responsiveness and fully optimized performance</li>
              <li>Developed a Chat Application using the MERN stack and Socket.io, enabling real-time messaging</li>
              <li>Contributed to a Live Project, developing responsive web pages with React.js and Tailwind CSS</li>
              <li>
                In projects, Implemented core React functionality: data fetching, form handling, component management,
                state management, routing, loaders, and REST API integrations
              </li>
            </ul>

          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="bg-white/90 p-8 rounded-3xl shadow-2xl border border-yellow-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-300 pb-2">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "HTML5", level: 5 },
              { skill: "CSS3", level: 4.5 },
              { skill: "JavaScript", level: 5 },
              { skill: "React", level: 5 },
              { skill: "Tailwind CSS", level: 4.5 },
              { skill: "Node.js", level: 3 },
              { skill: "MongoDB", level: 3 },
              { skill: "Postman", level: 4 },
              { skill: "GitHub", level: 4 },
            ].map(({ skill, level }) => (
              <div key={skill} className="space-y-1">
                <div className="font-medium">{skill}</div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`bg-purple-600 h-3 rounded-full`}
                    style={{ width: `${level * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Personal Info Section */}
        <motion.section
          className="bg-white/90 p-8 rounded-3xl shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
            Personal Info
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-lg">
            <p>
              <strong>Name:</strong> Divy Vasani
            </p>
            <p>
              <strong>Contact No:</strong> <a href="tel:+917041083050" className="hover:underline">+91 7041083050</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:divyvasani09@gmail.com" className="hover:underline">divyvasani09@gmail.com</a>
            </p>
            <p>
              <strong>Location:</strong> <a href="https://www.google.com/maps/place/katargam/data=!4m2!3m1!1s0x3be04eeb5c1077c1:0xf3db03f8cc74c359?sa=X&ved=1t:242&ictx=111" className="hover:underline">Katargam,Surat,India</a>
            </p>
            <p>
              <strong>Hobbies:</strong> Gaming, UI Design, Playing Chess
            </p>
          </div>
        </motion.section>
      </main>

      <footer className="text-center text-sm text-gray-600 py-10 bg-gradient-to-r from-pink-100 to-yellow-100 mt-16">
        <div className="flex justify-center gap-2 mb-1">
          <button
            onClick={() => window.open('https://github.com/Divy-Vasani-09')}
            className="cursor-pointer"
          >
            <FaSquareGithub className="text-3xl" />
          </button>
          <button
            onClick={() => window.open('https://www.linkedin.com/in/divy-vasani-371266282')}
            className="cursor-pointer"
          >
            <FaLinkedin className="text-3xl" />
          </button>

        </div>
        © 2025 Divy Vasani | Built using React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition border hover:border-purple-300"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-3 h-40 object-cover w-full"
      />
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>

    </motion.div>
  );
}

export default App;
