import React from "react";
import {
  FaHome,
  FaBuilding,
  FaTruck,
  FaMapMarkerAlt,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaRupeeSign,
  FaPhoneAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#2563eb] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Professional Moving & <br /> Packing Services
            </h1>

            <p className="text-lg md:text-xl mb-8 opacity-90">
              Reliable transportation solutions across Gurgaon, Delhi NCR and All India.
              House shifting, corporate moves, and everything in between.
            </p>

            <div className="flex gap-4">
              <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300">
                Get Free Quote
              </Link>

              <Link to="/services" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/home/Home1.png"
              alt="Moving Services"
              className="w-full max-w-lg rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>



      {/* OUR SERVICES SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white" id="service">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h2>
          <p className="text-gray-500 text-lg mt-3 mb-12">
            Comprehensive moving and transportation solutions for all your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-blue-600 p-4 rounded-lg inline-flex mb-6 text-white text-3xl">
                <FaHome />
              </div>
              <h3 className="text-xl font-semibold mb-3">House Shifting</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete household relocation services with careful packing and safe transportation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-yellow-500 p-4 rounded-lg inline-flex mb-6 text-white text-3xl">
                <FaBuilding />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Moving</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized office relocation services with minimal downtime and maximum efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-green-500 p-4 rounded-lg inline-flex mb-6 text-white text-3xl">
                <FaTruck />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Transport</h3>
              <p className="text-gray-600 leading-relaxed">
                8ft and 10ft vehicles available for various transportation needs across India.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* COVERAGE AREAS SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Coverage Areas</h2>
            <p className="text-gray-300 text-lg mb-10">
              From Gurgaon and Delhi NCR to anywhere across India – we've got you covered.
            </p>

            <div className="flex flex-col md:flex-row gap-6">

              {/* Local Areas */}
              <div className="bg-[#1e293b] p-8 rounded-xl w-full md:w-64 shadow-lg">
                <div className="flex items-center gap-2 mb-5 text-yellow-400 text-2xl">
                  <FaMapMarkerAlt />
                  <h3 className="text-xl font-semibold text-white">Local Areas</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>Gurgaon</li>
                  <li>Delhi NCR</li>
                  <li>Noida</li>
                  <li>Faridabad</li>
                </ul>
              </div>

              {/* Pan India */}
              <div className="bg-[#1e293b] p-8 rounded-xl w-full md:w-64 shadow-lg">
                <div className="flex items-center gap-2 mb-5 text-yellow-400 text-2xl">
                  <FaGlobe />
                  <h3 className="text-xl font-semibold text-white">Pan India</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>Mumbai</li>
                  <li>Bangalore</li>
                  <li>Chennai</li>
                  <li>& All Major Cities</li>
                </ul>
              </div>

            </div>
          </div>

          {/* MAP IMAGE */}
          <div className="flex justify-center">
            <img
              src="/home/map.png"
              alt="Coverage Map"
              className="w-full max-w-xl rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>



      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Why Choose A2M Transport?
          </h2>
          <p className="text-gray-500 text-lg mb-16">
            Professional, reliable, and customer-focused moving solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-lg font-semibold mb-2">Insured & Safe</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete insurance coverage for your belongings during transportation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <FaClock />
              </div>
              <h3 className="text-lg font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Guaranteed delivery within committed timeframes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <FaUsers />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Professionals who handle your belongings with care & expertise.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <FaRupeeSign />
              </div>
              <h3 className="text-lg font-semibold mb-2">Affordable Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing without compromising quality.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* CTA SECTION */}
      <section className="bg-[#2563eb] py-16 px-6 md:px-16 text-center text-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Move? Get Your Free Quote Today!
          </h2>

          <p className="text-lg md:text-xl mb-10 opacity-90">
            Contact us now for professional moving and packing services across India
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">

            {/* Call Button */}
            <a
              href="tel:8130880761"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow flex items-center gap-2 justify-center transition-all duration-300"
            >
              <FaPhoneAlt className="text-xl" />
              Call: 8130880761
            </a>

            {/* Estimate Button */}
            <Link to="/contact"  className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Get Free Estimate
            </Link>

          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
