import React from "react";

function DeleteModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
        <p className="mb-6">
          Apakah Anda yakin ingin menghapus data pegawai ini?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
