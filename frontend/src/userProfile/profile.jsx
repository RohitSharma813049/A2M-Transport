import { useSelector } from "react-redux";
import { FaUserCircle, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export function UserProfile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <FaUserCircle className="text-6xl text-gray-400" />
          <h2 className="mt-4 text-3xl font-bold">
            {user?.name || "User Name"}
          </h2>
          <p className="text-gray-500">Profile Information</p>
        </div>

        {/* Details Box */}
        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaEnvelope className="text-blue-600 text-xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-gray-800 font-semibold">{user?.email || "example@example.com"}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaPhoneAlt className="text-green-600 text-xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-gray-800 font-semibold">{user?.phone || "Not Provided"}</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaMapMarkerAlt className="text-red-500 text-xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="text-gray-800 font-semibold">{user?.address || "No Address Provided"}</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>

      </div>
    </section>
  );
}
