import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-1">Sammunat</h4>
            <p className="text-sm text-gray-400">
              © 2025 Sammunat. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Features", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
