import React, { useState } from "react";

function EditModal({ employee, onClose, onUpdate }) {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Data Pegawai</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">NIP</label>
            <input
              type="text"
              name="nip"
              className="w-full p-2 border rounded"
              value={formData.nip}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Nama</label>
            <input
              type="text"
              name="nama"
              className="w-full p-2 border rounded"
              value={formData.nama}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Posisi</label>
            <input
              type="text"
              name="posisi"
              className="w-full p-2 border rounded"
              value={formData.posisi}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">No HP</label>
            <input
              type="text"
              name="noHp"
              className="w-full p-2 border rounded"
              value={formData.noHp}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
