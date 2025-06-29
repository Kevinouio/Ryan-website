const projectData = [
    {
        title: "MAZero Agent Framework",
        description: "A heterogeneous/sequential update agent framework for the MAZero algorithm, improving team coordination and performance.",
        link: "https://github.com/RDG0818/MAZero",
        tags: ["Python", "Multi-Agent RL", "PettingZoo"],
        image: "https://placehold.co/600x350/2980B9/E0F2F7?text=MAZero+Framework",
    },
    {
        title: "Diffusion Q-Learning Extension",
        description: "An extension of diffusion Q-learning with clustering-based stratification to prioritize high-quality transitions, improving performance on heavily imbalanced offline datasets.",
        link: "https://github.com/RDG0818/Diffusion-Policies-for-Offline-RL",
        tags: ["Python", "PyTorch", "Offline RL"],
        image: "https://placehold.co/600x350/1F618D/F0F8FF?text=Diffusion+Q-Learning",
    },
    {
        title: "Algorithm Implementations",
        description: "A repository of high-quality implementations of a variety of AI, ML, numerical, and standard algorithms.",
        link: "https://github.com/RDG0818/Implementations",
        tags: ["Python", "Julia", "C++", "Algorithms"],
        image: "https://placehold.co/600x350/21618C/EBF5FB?text=Algorithm+Library",
    },
    {
        title: "DiALignment: LLM Response Editor",
        description: "A proof-of-concept app to modify LLM responses by adjusting activation vectors on Llama 3.2 and Qwen, using Flask, Streamlit, and the Gemini API.",
        link: "https://github.com/MittelmanDaniel/DiALignment",
        tags: ["Python", "LLM", "Flask", "Streamlit"],
        image: "https://placehold.co/600x350/5B2C6F/F4ECF7?text=DiALignment+App",
    }
];

const ProjectsPage = () => {
    return (
        <section className="bg-gray-950 py-16 px-6 md:px-8 flex-grow">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-50 mb-10 text-center">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden border border-gray-800 flex flex-col">
                            <img src={project.image} alt={`${project.title} placeholder`} className="w-full h-48 object-cover border-b border-gray-800" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-xl font-semibold text-gray-50 mb-2">{project.title}</h4>
                                <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-400 hover:text-blue-500 font-medium transition duration-200 mt-auto"
                                >
                                    View on GitHub
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
