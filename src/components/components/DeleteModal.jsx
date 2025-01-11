export default function DeleteModal({ ticket, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
        <p className="mb-6">
          Apakah Anda yakin ingin menghapus tiket "{ticket.jenis}"?
        </p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
