import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function KelolaPegawai({ addEmployee }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nip: "",
    nama: "",
    posisi: "",
    noHp: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    navigate("/pegawai");
  };

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Kelola Pegawai</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk mengelola data pegawai Agrowisata Tepas
        Papandayan.
      </p>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">ENTRI DATA</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">NIP</label>
            <input
              type="text"
              name="nip"
              placeholder="Masukan NIP"
              className="w-full p-2 border rounded"
              value={formData.nip}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">NAMA</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama"
                className="w-full p-2 border rounded"
                value={formData.nama}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2">POSISI</label>
              <input
                type="text"
                name="posisi"
                placeholder="Masukan Posisi"
                className="w-full p-2 border rounded"
                value={formData.posisi}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">NO HP</label>
            <input
              type="text"
              name="noHp"
              placeholder="Masukan NO HP"
              className="w-full p-2 border rounded"
              value={formData.noHp}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/pegawai")}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Kembali
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 text-white rounded"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KelolaPegawai;
