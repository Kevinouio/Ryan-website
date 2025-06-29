const AboutPage = () => {
    return (
        <div className="bg-gray-950 text-gray-200 flex-grow">
            {/* About Me Section */}
            <section className="bg-gray-900 py-16 px-6 md:px-8 border-b border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-gray-50 mb-6">About Me</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I am currently a third-year computer science and mathematics student at <span className="font-semibold text-blue-400">Mississippi State University</span> interested in artificial intelligence, machine learning, algorithms, and computational mathematics.
                    </p>
                </div>
            </section>

            {/* Extracurriculars Section */}
            <section className="py-16 px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-gray-50 mb-8 text-center">Extracurriculars</h3>
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
                        <h4 className="text-xl font-semibold text-blue-400">Competitive Programming Club Founding President</h4>
                        <p className="text-gray-400 mb-4">August 2024 – Present</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Organized mock coding competitions and structured practice sessions, preparing members for the International Collegiate Programming Contest (ICPC) and Meta Hacker Cup.</li>
                            <li>Held topic-based training sessions on graph theory, dynamic programming, hash maps, and algorithm optimization.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
