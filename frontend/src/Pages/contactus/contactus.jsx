import React, { useState } from "react";
import api from "@/api/axiosInstance";     // ✅ REQUIRED
import { showError, showSuccess } from "@/utils";

export function Contactus() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.number.trim()) errs.number = "Phone is required";
    else if (!/^[0-9+\-()\s]{6,20}$/.test(form.number))
      errs.number = "Invalid phone number";
    if (!form.message.trim()) errs.message = "Message is required";

    return errs;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();

  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    showError("Please correct the highlighted errors.");
    return;
  }

  setLoading(true);

  try {
    const res = await api.post("/api/contact/add", form);

    showSuccess(res.data?.message || "Message sent successfully!");

    // Reset
    setForm({ name: "", email: "", number: "", message: "" });

  } catch (err) {
    console.error("Contact submit error:", err);

    if (err.response) {
      const msg =
        err.response.data?.message ||
        err.response.data?.error ||
        JSON.stringify(err.response.data);
      showError(msg);
    } else {
      showError("Server not responding. Try again.");
    }
  } finally {
    setLoading(false);
  }
};



  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Contact Us</h2>
        <p className="text-gray-600 text-lg mt-3">
          Have questions? Need a quote? We’re here to help you anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-custom">
          <h3 className="text-xl font-semibold mb-6 text-dark">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className={`w-full border p-3 rounded-lg ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className={`w-full border p-3 rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            {/* Number */}
            <div>
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                className={`w-full border p-3 rounded-lg ${
                  errors.number ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.number && <p className="text-red-600 text-sm">{errors.number}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className={`w-full border p-3 rounded-lg ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-white font-semibold px-6 py-3 rounded-lg w-full ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-primary-dark"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            title="map"
            className="w-full h-full min-h-[360px] rounded-2xl shadow-custom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.27570272828!2d77.033!3d28.457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d183c1f0c9d43%3A0x123456789!2sGurgaon!5e0!3m2!1sen!2sin!4v123456"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
