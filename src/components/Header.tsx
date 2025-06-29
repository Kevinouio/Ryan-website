import { NavLink } from 'react-router-dom';

const Header = () => {
    const linkStyle = {
        base: "text-gray-300 hover:text-blue-400 font-medium transition duration-200",
        active: "text-blue-400"
    };

    return (
        <header className="bg-gray-900 border-b border-gray-800 py-4 px-6 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-semibold text-gray-50">My Portfolio</NavLink>
                <nav>
                    <ul className="flex space-x-6">
                        <li><NavLink to="/projects" className={({isActive}) => `${linkStyle.base} ${isActive ? linkStyle.active : ''}`}>Projects</NavLink></li>
                        <li><NavLink to="/skills" className={({isActive}) => `${linkStyle.base} ${isActive ? linkStyle.active : ''}`}>Skills</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) => `${linkStyle.base} ${isActive ? linkStyle.active : ''}`}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive}) => `${linkStyle.base} ${isActive ? linkStyle.active : ''}`}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;