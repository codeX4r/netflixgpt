const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Contact */}
        <p className="mb-6">
          Questions? Call{" "}
          <a href="tel:000-800-919-1694" className="underline">
            000-800-919-1694
          </a>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              className="hover:underline hover:text-gray-200 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mt-6">
          <select className="bg-black border border-gray-600 px-3 py-2 text-sm">
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
