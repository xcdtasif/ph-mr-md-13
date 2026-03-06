import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <div className="bg-black text-white">
      {/* desktop footer */}
      <footer className="max-w-360 mx-auto gap-8 px-4 lg:px-16 hidden lg:block">
        {/* grid */}
        <div className="grid grid-cols-5 gap-8 py-8">
          {/* cs — ticket system */}
          <div className="space-y-4">
            <div className="text-xl font-bold">
              <a href="#">CS — Ticket System</a>
            </div>
            <div className="text-[#A1A1AA]">
              <p>
                CS — Ticket System streamlines support operations by helping
                teams manage, track, and resolve customer issues with ease.
                Built for speed and simplicity, it ensures organized workflows
                and exceptional customer experiences.
              </p>
            </div>
          </div>
          {/* company */}
          <div className="space-y-4">
            <div className="text-lg font-medium">
              <p>Company</p>
            </div>
            <div className="text-[#A1A1AA] space-y-2">
              <div>
                <a href="#">About Us</a>
              </div>
              <div>
                <a href="#">Our Mission</a>
              </div>
              <div>
                <a href="#">Contact Sales</a>
              </div>
            </div>
          </div>
          {/* services */}
          <div className="space-y-4">
            <div className="text-lg font-medium">
              <p>Services</p>
            </div>
            <div className="text-[#A1A1AA] space-y-2">
              <div>
                <a href="#">Products & Services</a>
              </div>
              <div>
                <a href="#">Customer Stories</a>
              </div>
              <div>
                <a href="#">Download Apps</a>
              </div>
            </div>
          </div>
          {/* information */}
          <div className="space-y-4">
            <div className="text-lg font-medium">
              <p>Information</p>
            </div>
            <div className="text-[#A1A1AA] space-y-2">
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Terms & Conditions</a>
              </div>
              <div>
                <a href="#">Join Us</a>
              </div>
            </div>
          </div>
          {/* social links */}
          <div className="space-y-4">
            <div className="text-lg font-medium">
              <p>Social Links</p>
            </div>
            <div className="text-[#A1A1AA] space-y-2">
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black"
                    icon="fa-brands fa-x-twitter"
                  />
                </span>
                @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black"
                    icon="fa-brands fa-linkedin-in"
                  />
                </span>
                @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black"
                    icon="fa-brands fa-facebook-f"
                  />
                </span>
                @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black"
                    icon="fa-solid fa-envelope"
                  />
                </span>
                support@csts.com
              </a>
            </div>
          </div>
        </div>
        {/* line */}
        <hr className="text-[#D9D9D9]/20" />
        {/* copyright */}
        <p className="text-sm text-center text-[#A1A1AA] py-4">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </footer>
      {/* mobile footer accordion */}
      <footer className="max-w-360 mx-auto lg:hidden">
        {/* company info - always visible */}
        <div className="p-4">
          <div className="text-xl font-bold mb-2">CS — Ticket System</div>
          <p className="text-[#A1A1AA] text-sm">
            CS — Ticket System streamlines support operations by helping teams
            manage, track, and resolve customer issues with ease. Built for
            speed and simplicity.
          </p>
        </div>
        {/* company accordion */}
        <div className="border-t border-gray-800">
          <button
            onClick={() => toggleSection("company")}
            className="w-full flex justify-between items-center p-4"
          >
            <span className="text-lg font-medium">Company</span>
            <FontAwesomeIcon
              icon={
                openSection === "company"
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              className="text-gray-400"
            />
          </button>
          {openSection === "company" && (
            <div className="px-4 pb-4 text-[#A1A1AA] space-y-2">
              <div>
                <a href="#">About Us</a>
              </div>
              <div>
                <a href="#">Our Mission</a>
              </div>
              <div>
                <a href="#">Contact Sales</a>
              </div>
            </div>
          )}
        </div>
        {/* services accordion */}
        <div className="border-t border-gray-800">
          <button
            onClick={() => toggleSection("services")}
            className="w-full flex justify-between items-center p-4"
          >
            <span className="text-lg font-medium">Services</span>
            <FontAwesomeIcon
              icon={
                openSection === "services"
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              className="text-gray-400"
            />
          </button>
          {openSection === "services" && (
            <div className="px-4 pb-4 text-[#A1A1AA] space-y-2">
              <div>
                <a href="#">Products & Services</a>
              </div>
              <div>
                <a href="#">Customer Stories</a>
              </div>
              <div>
                <a href="#">Download Apps</a>
              </div>
            </div>
          )}
        </div>
        {/* information accordion */}
        <div className="border-t border-gray-800">
          <button
            onClick={() => toggleSection("information")}
            className="w-full flex justify-between items-center p-4"
          >
            <span className="text-lg font-medium">Information</span>
            <FontAwesomeIcon
              icon={
                openSection === "information"
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              className="text-gray-400"
            />
          </button>
          {openSection === "information" && (
            <div className="px-4 pb-4 text-[#A1A1AA] space-y-2">
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Terms & Conditions</a>
              </div>
              <div>
                <a href="#">Join Us</a>
              </div>
            </div>
          )}
        </div>
        {/* social links accordion */}
        <div className="border-t border-gray-800">
          <button
            onClick={() => toggleSection("social")}
            className="w-full flex justify-between items-center p-4"
          >
            <span className="text-lg font-medium">Social Links</span>
            <FontAwesomeIcon
              icon={
                openSection === "social"
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              className="text-gray-400"
            />
          </button>
          {openSection === "social" && (
            <div className="px-4 pb-4 text-[#A1A1AA] space-y-2">
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black text-xs"
                    icon="fa-brands fa-x-twitter"
                  />
                </span>
                @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black text-xs"
                    icon="fa-brands fa-linkedin-in"
                  />
                </span>
                @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black text-xs"
                    icon="fa-brands fa-facebook-f"
                  />
                </span>
                @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-black text-xs"
                    icon="fa-solid fa-envelope"
                  />
                </span>
                support@csts.com
              </a>
            </div>
          )}
        </div>
        {/* line */}
        <hr className="text-[#D9D9D9]/20" />
        {/* copyright */}
        <p className="text-sm text-center text-[#A1A1AA] py-4">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
