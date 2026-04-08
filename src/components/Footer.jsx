const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-12 py-12 text-sm w-full">

      <div className="max-w-6xl mx-auto">

        {/* Contact */}
        <p className="mb-8">
          Questions?{" "}
          <a
            href="tel:000-800-919-1694"
            className="underline hover:text-white transition"
          >
            Call 000-800-919-1694
          </a>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-8">
          {[
            "FAQ",
            "Help Centre",
            "Account",
            "Media Centre",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline hover:text-white transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mt-8">
          <select className="bg-black border border-gray-600 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Region */}
        <p className="mt-6 text-gray-500">Netflix India</p>

      </div>

    </footer>
  );
};

export default Footer;
