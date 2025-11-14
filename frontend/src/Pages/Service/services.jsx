import React from "react";
import { FaTruck, FaBoxOpen, FaShippingFast, FaWarehouse } from "react-icons/fa";

export function Services() {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-blue-600 mb-4" />,
      title: "Local Transport",
      desc: "Fast and reliable transport service within Gurgaon and Delhi NCR areas.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-blue-600 mb-4" />,
      title: "Intercity Delivery",
      desc: "Affordable intercity logistics solutions with real-time tracking and support.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-blue-600 mb-4" />,
      title: "Parcel & Courier Service",
      desc: "Safe and secure courier service for personal and business needs.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-blue-600 mb-4" />,
      title: "Warehouse Storage",
      desc: "Short-term and long-term storage facilities for goods and inventory.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Transport Services
        </h2>
        <p className="text-gray-500 mb-12">
          A2M Transport provides trusted logistics and delivery services across India.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
