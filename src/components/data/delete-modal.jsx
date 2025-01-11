export default function DeleteModal({ item, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold mb-4">Hapus Barang</h2>
        <p className="text-gray-600 mb-6">
          Apakah Anda yakin ingin menghapus barang "{item.name}"? Tindakan ini
          tidak dapat dibatalkan.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
