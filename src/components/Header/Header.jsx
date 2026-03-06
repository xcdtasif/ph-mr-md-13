import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white text-black sticky top-0 z-40">
      {/* header */}
      <div className="navbar max-w-360 mx-auto px-4 lg:px-16">
        {/* left - Logo */}
        <div className="navbar-start">
          <a href="#" className="text-xl font-bold">
            CS — Ticket System
          </a>
        </div>
        {/* right - Hamburger + Menu + Button */}
        <div className="navbar-end">
          {/* Hamburger button - visible on mobile/tablet */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop menu - visible on large screens */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* Desktop New Ticket button */}
          <a
            href="#"
            className="btn bg-blue-600 text-white hidden lg:flex gap-2"
          >
            <FontAwesomeIcon icon="fa-solid fa-plus" />
            <span className="font-semibold">New Ticket</span>
          </a>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="menu p-4 gap-2">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Changelog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Download
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className="px-4 pb-4">
            <a href="#" className="btn bg-blue-600 text-white w-full gap-2">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
              <span className="font-semibold">New Ticket</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
