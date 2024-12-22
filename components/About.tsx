import { IoPersonCircleOutline } from "react-icons/io5";


export default function About() {
    return ( 
        <div id="aboutme" className="container mx-auto px-16 py-16 text-center">
            <IoPersonCircleOutline className = "mx-auto my-4 text-blue-600 h-8 w-8"/>
            <h1 className="text-3xl text-center mb-4 text-gray-800 font-poppins font-semibold">About Me</h1>
            <hr className="border-blue-600 w-16 mx-auto" />
            <p className = "text-xl font-quicksand my-4"> Here you can learn a little bit about me!</p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* Left Half: Personal, Education, Work */}
                <div className="border border-gray-300 rounded-lg p-12 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 font-poppins text-gray-800">Personal & Professional Journey</h2>
                    <div className="space-y-4 font-quicksand text-gray-800">
                        <section>
                            <h3 className="text-xl font-semibold mb-2">Personal</h3>
                            <p>
                                Hello! I'm <span className = "text-blue-600 text-lg font-semibold">Nathaniel Bauer</span>, a passionate computer science student based in Maryland. 
                                When I'm not coding, you can find me trading stocks or at the gym.
                            </p>
                        </section>
                        <section className = "text-left">
                            <h3 className="text-xl font-semibold mb-2 text-center">Education</h3>
                            <ul className="list-disc pl-5">
                                <li>Bachelors of Science in Computer Science from University of Maryland, 2025</li>
                                <h6 className ="text-blue-600 text-lg font-semibold">Key Courses</h6>
                                <ul className = "list-disc pl-5">
                                    <li>Object-Oriented Programming</li>
                                    <li>Discrete Structures</li>
                                    <li>Advanced Data Structures</li>
                                    <li>Algorithms</li>
                                    <li>Quantum Computing</li>
                                    <li>Web Development</li>
                                </ul>
                            </ul>
                        </section>
                        <section>
                            <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className ="text-blue-600 text-lg font-semibold">Teller</span> at PNC Bank
                                    <br />
                                    <span className="text-sm text-gray-500">02/26/2024 - Present</span>
                                </li>
                                <li>
                                    <span className ="text-blue-600 text-lg font-semibold">Stocker/Unloader</span> at Walmart
                                    <br />
                                    <span className="text-sm text-gray-500">07/1/2022 - 02/22/2024</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Right Half: Skills */}
                <div className="border border-gray-300 rounded-lg p-12 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 font-poppins text-gray-800">Skills</h2>
                    <div className="space-y-12 font-quicksand text-gray-800">
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">JavaScript</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Python</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">HTML/CSS</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Tailwind</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">OCaml</span>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">React</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">Next.js</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Node.js</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">Express</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Django</span>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">Git</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Docker</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">AWS</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">GraphQL</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">MongoDB</span>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Team Leadership</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">Project Management</span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Problem Solving</span>
                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">Communication</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
