import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600">Sammunat</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          {["Home", "About", "Features", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-indigo-600 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-600">
            {["Home", "About", "Features", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
