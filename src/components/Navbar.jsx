import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-gray-900 text-white px-8 py-5 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Greeshmita</h1>

      <div className="flex items-center gap-8">
        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>

          <li>
  <a
    href="#testimonials"
    className="hover:text-blue-400"
  >
    Testimonials
  </a>
</li>
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl hover:text-yellow-400 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;