import React, { useEffect, useState } from "react";
import api from "@/api/axiosInstance";
import { showSuccess, showError } from "@/utils";

export function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔵 Fetch All Users
  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users"); // ✅ FIXED URL
      setUsers(res.data.users);
    } catch (err) {
      console.error("Fetch users error:", err);
      showError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  // 🔴 Delete User
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await api.delete(`/admin/users/${id}`); // ✅ FIXED URL

      showSuccess("User deleted successfully");

      // Remove user from UI
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      showError("Failed to delete user");
    }
  };

  // Load users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Users List</h2>

      {/* Loading */}
      {loading && <p className="text-gray-600">Loading users...</p>}

      {/* No Users */}
      {!loading && users.length === 0 && (
        <p className="text-gray-600">No users found.</p>
      )}

      {/* Table */}
      {!loading && users.length > 0 && (
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-700">#</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Email</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Phone</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Role</th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, index) => (
                <tr key={u._id} className="border-t">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{u.name}</td>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">{u.phone || "N/A"}</td>
                  <td className="px-6 py-4 capitalize">{u.role}</td>

                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      View
                    </button>

                    <button
                      onClick={() => handleDelete(u._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
