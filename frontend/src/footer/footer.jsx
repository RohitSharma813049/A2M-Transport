import React from "react";
import { FaTruck } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-light)" }}
      className="py-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h1 className="flex items-center font-bold text-xl mb-2">
            <span
              className="p-2 rounded-lg mr-2"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
             <FaTruck className="text-2xl" />
            </span>
            A2M Transport
          </h1>
          <p className="text-gray-300">
            Professional moving and packing services across Gurgaon, Delhi NCR
            and All India.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Services</h4>
          <ul className="space-y-1 text-gray-400">
            <li>House Shifting</li>
            <li>Corporate Moving</li>
            <li>Movers & Packers</li>
            <li>Vehicle Transport</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Coverage</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Gurgaon</li>
            <li>Delhi NCR</li>
            <li>All India</li>
            <li>Major Cities</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Contact Info</h4>
          <ul className="space-y-1 text-gray-400">
            <li>📞 8130880761</li>
            <li>📍 Gurgaon, Delhi NCR</li>
            <li>🚚 8ft & 10ft Vehicles</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400">
        © 2025 A2M Transport. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
