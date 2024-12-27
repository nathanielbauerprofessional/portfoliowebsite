'use client'
import { PiProjectorScreenChart } from "react-icons/pi";

const projects = [
    {
      title: 'Portfolio Website',
      description: `A <span class="text-blue-600 font-bold">personal portfolio website</span> to showcase my projects and skills.`,
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      link: 'https://nathanielbauer.com',
    }, 
    {
      "title": "To Do List App",
      "description": `A dynamic and interactive <span class="text-blue-600 font-bold">to-do list application</span> designed to help users manage their tasks efficiently. It features secure user authentication, task manipulation, and persistent storage with MongoDB.`,
      "technologies": ["Next.js", "React", "Tailwind CSS", "MongoDB"],
      "link": "https://nathanielbauer.com/todolist"
    }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="p-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <PiProjectorScreenChart className="mx-auto my-4 text-blue-600 h-8 w-8" />
          <h1 className="text-3xl text-center mb-4 text-gray-800 font-poppins font-semibold">Projects</h1>
          <hr className="border-blue-600 w-16 mx-auto" />
          <p className="text-xl font-quicksand my-4 text-center">
            Scroll to view some of my previous projects and click on one to learn more about it!
          </p>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-sm bg-white p-8 font-quicksand"
              >
                <h3 className="text-2xl font-bold mb-2 font-poppins">{project.title}</h3>
                <p
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  