import { useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";

export default function KelolaTiket() {
  const navigate = useNavigate();
  const { addTicket } = useTickets();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newTicket = {
      jenis: formData.get("jenis"),
      harga: formData.get("harga"),
      stok: parseInt(formData.get("stok")),
      detail: formData.get("detail"),
    };

    addTicket(newTicket);
    navigate("/tiket");
  };

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Kelola Tiket</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk mengelola tiket pengunjung Agwowisata Tepas
        Papandayan.
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">ENTRI DATA</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              JENIS TIKET
            </label>
            <input
              type="text"
              name="jenis"
              placeholder="Masukan Nama Tiket"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">HARGA</label>
              <input
                type="text"
                name="harga"
                placeholder="Harga"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">STOK</label>
              <input
                type="number"
                name="stok"
                placeholder="Stok"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">DETAIL</label>
            <input
              type="text"
              name="detail"
              placeholder="Detail"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/tiket")}
              className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded-lg flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
