export default function Hero() {
    return ( 
        <div id="home" className="min-h-screen bg-gray-100 flex items-center">
            <div className="container mx-auto p-12 md:p-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 font-poppins">
                            Hi, I&#39;m <span className="text-blue-600 font-poppins text-6xl md:text-7xl">Nathaniel Bauer</span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4 font-quicksand">
                            A Developer Exploring the World of AI, Web Development, and More.
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 font-quicksand">
                            I&#39;m a computer science student with an interest in learning new technologies. I&#39;m open to opportunities in software development, AI/ML, and web development.
                        </p>
                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 font-poppins"
                        >
                            Get in Touch
                        </a>
                    </div>
                    <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center items-center">
                        <div className="flex w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg">
                            <img
                            src="/IMG_0195.png"
                            alt="Nathaniel Bauer"
                            width={400}
                            height={400}
                            className="object-cover w-full h-full object-[top]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
