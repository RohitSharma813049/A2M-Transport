import React, { useEffect, useState } from "react";
import api from "@/api/axiosInstance";
import { showError, showSuccess } from "@/utils";

export function Contactuslist() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/api/contact/get");

      console.log("Contact Response:", res.data);

      // FIXED KEY HERE 👇
      setMessages(res.data?.messages || []);
    } catch (err) {
      console.error(err);
      showError("Failed to load contact messages");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!confirm("Delete this message?")) return;

    try {
      await api.delete(`/api/contact/delete/${id}`);
      showSuccess("Message deleted successfully");
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error(err);
      showError("Failed to delete message");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>

      {loading && <p>Loading...</p>}

      {!loading && messages.length === 0 && <p>No messages found.</p>}

      {!loading && messages.length > 0 && (
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg._id} className="border-t">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{msg.name}</td>
                  <td className="px-6 py-4">{msg.email}</td>
                  <td className="px-6 py-4">{msg.number}</td>
                  <td className="px-6 py-4">{msg.message}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteMessage(msg._id)}
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
