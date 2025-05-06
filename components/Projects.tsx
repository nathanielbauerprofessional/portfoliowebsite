'use client'
import { PiProjectorScreenChart } from "react-icons/pi";

const projects = [
  {
    title: "Shark‑Tooth Detection Rover",
    description: `
      An <span class="text-blue-600 font-bold">autonomous Raspberry Pi rover</span> prototype that patrols beaches and 
      <span class="text-blue-600 font-bold">detects shark teeth</span> in real time using a Roboflow-trained object detection model.
      Features live camera capture, on‑board inference, and instant alert notifications.
      <br/><em class="text-gray-500">Work in progress: adding a touchscreen UI for direct control and feedback.</em>
    `,
    technologies: [
      "Raspberry Pi",
      "Python",
      "OpenCV",
      "Roboflow",
      "Inference"
    ],
    link: "/inprogress"
    },
    {
      title: "AI Recipe Generator",
      description: `An innovative <span class="text-blue-600 font-bold">AI-powered recipe generator</span> that helps users create unique recipes based on ingredients they have at home. Features include a customizable pantry, allergen settings, and AI-generated recipe suggestions for diverse culinary needs.`,
      technologies: ["Next.js", "React", "Tailwind CSS", "OpenAI API"],
      link: "https://airecipegenerator.vercel.app/"
    },
    {
      title: 'Portfolio Website',
      description: `A <span class="text-blue-600 font-bold">personal portfolio website</span> to showcase my projects and skills.`,
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      link: 'https://nathanielbauer.com',
    }, 
  
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="p-12 m:p-16 bg-gray-50">
        <div className="container mx-auto px-0 md:px-6">
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
  