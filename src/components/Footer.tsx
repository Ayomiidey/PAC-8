import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">PAC-8</h3>
            <p className="text-sm">
              Pack it, Pack More. <br /> since 2024.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ayomiidey"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/quadri-alarape/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to={"/about"} className="text-sm hover:text-white">
                  About PAC-8
                </Link>
              </li>
              <li>
                <Link to={""} className="text-sm hover:text-white">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to={""} className="text-sm hover:text-white">
                  About Developer
                </Link>
              </li>
              <li>
                <Link to={""} className="text-sm hover:text-white">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>PAC-8</li>
              <li>123 Packaging Street,</li>
              <li>Ikeja, LA 10001</li>
              <li>
                <a
                  href="tel:+2348144087702"
                  className="hover:text-white transition-colors duration-200"
                >
                  Phone: +2348144087702
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pac8.edu"
                  className="hover:text-white transition-colors duration-200"
                >
                  Email: pac8now@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 PAC-8. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
