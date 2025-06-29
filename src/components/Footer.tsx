import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8 px-6 md:px-8 mt-auto">
            <div className="max-w-7xl mx-auto text-center text-gray-400">
                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="hover:text-blue-400 transition duration-200">LinkedIn</a>
                    <a href="#" className="hover:text-blue-400 transition duration-200">GitHub</a>
                    <Link to="/contact" className="hover:text-blue-400 transition duration-200">Email</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;