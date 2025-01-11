import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";

export default function KonfirmasiTiket() {
  const { tickets, editTicket, deleteTicket } = useTickets();
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (ticket) => {
    setSelectedTicket(ticket);
    setShowEditModal(true);
  };

  const handleDelete = (ticket) => {
    setSelectedTicket(ticket);
    setShowDeleteModal(true);
  };

  const handleEditSubmit = (editedTicket) => {
    editTicket(editedTicket);
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    deleteTicket(selectedTicket.id);
    setShowDeleteModal(false);
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.jenis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Konfirmasi Tiket</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk melihat data serta menambah detail tiket
        pengunjung Agrowisata Tepas Papandayan.
      </p>

      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <button className="mr-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Pencarian"
            className="border rounded-lg px-4 py-2 w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">JENIS TIKET</th>
              <th className="px-6 py-3 text-left">HARGA</th>
              <th className="px-6 py-3 text-left">STOK</th>
              <th className="px-6 py-3 text-left">DETAIL</th>
              <th className="px-6 py-3 text-left">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="border-b">
                <td className="px-6 py-4">{ticket.jenis}</td>
                <td className="px-6 py-4">{ticket.harga}</td>
                <td className="px-6 py-4">{ticket.stok}</td>
                <td className="px-6 py-4">{ticket.detail}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(ticket)}
                    className="bg-green-500 text-white p-2 rounded-lg mr-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(ticket)}
                    className="bg-orange-500 text-white p-2 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate("/kelola-tiket")}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg"
        >
          Kelola Tiket
        </button>
      </div>

      {showEditModal && (
        <EditModal
          ticket={selectedTicket}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditSubmit}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          ticket={selectedTicket}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}
