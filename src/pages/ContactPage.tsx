const ContactPage = () => {
    return (
        <section className="bg-gray-950 py-24 px-6 md:px-8 flex-grow flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-gray-50 mb-6">Get In Touch</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
                </p>
                <a
                    href="mailto:your.email@example.com"
                    className="bg-blue-600 text-white px-8 py-4 rounded-md shadow-lg
                     hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5
                     inline-block text-lg font-semibold"
                >
                    Send me an email
                </a>
            </div>
        </section>
    );
};

export default ContactPage;
