import { Link } from "react-router-dom";

export function Aboutus() {
  return (
    <>
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/About/About.png"
              alt="About Us"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              About Us
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are a trusted moving and transportation company serving customers
              across Gurgaon, Delhi NCR, and all over India. With years of
              experience, we specialize in providing safe, fast, and efficient
              relocation services tailored to your needs.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From household shifting to corporate moving and vehicle transport,
              our professional team ensures a hassle-free and smooth relocation
              experience every time.
            </p>

            {/* BUTTON */}
            <Link to="/services"
              className="
                bg-primary 
                hover:bg-primary-dark
                text-white 
                px-6 py-3 
                rounded-lg 
                font-semibold
                transition-all
                duration-300
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
