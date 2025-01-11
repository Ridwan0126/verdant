export default function EditModal({ ticket, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const editedTicket = {
      ...ticket,
      jenis: formData.get("jenis"),
      harga: formData.get("harga"),
      stok: parseInt(formData.get("stok")),
      detail: formData.get("detail"),
    };
    onSubmit(editedTicket);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Edit Tiket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Jenis Tiket
            </label>
            <input
              type="text"
              name="jenis"
              defaultValue={ticket.jenis}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Harga</label>
            <input
              type="text"
              name="harga"
              defaultValue={ticket.harga}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Stok</label>
            <input
              type="number"
              name="stok"
              defaultValue={ticket.stok}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Detail</label>
            <input
              type="text"
              name="detail"
              defaultValue={ticket.detail}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
