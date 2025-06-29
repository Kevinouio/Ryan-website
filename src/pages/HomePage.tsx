import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <section className="bg-gray-900 py-16 px-6 md:px-8 text-center border-b border-gray-800">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4 leading-tight">Crafting Solutions with Precision & Design</h2>
                <p className="text-xl text-gray-300 mb-8">Blending robust functionality with intuitive user experiences.</p>
                <Link to="/projects" className="bg-transparent border border-blue-600 text-blue-400 px-8 py-3 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition duration-300 transform hover:-translate-y-0.5">
                    View My Work
                </Link>
            </div>
        </section>
    );
};

export default HomePage;