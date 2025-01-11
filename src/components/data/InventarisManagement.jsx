import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageInventory() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    kode: "",
    nama: "",
    jumlah: "",
    harga: "",
    gambar: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      jumlah: parseInt(formData.jumlah),
      harga: parseInt(formData.harga),
    };
    const existingInventory = JSON.parse(
      localStorage.getItem("inventory") || "[]"
    );
    const updatedInventory = [...existingInventory, newItem];
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
    navigate("/inventaris");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          gambar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Kelola Inventaris</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk mengelola inventaris Agrowisata Tepas
        Papandayan.
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">ENTRI DATA</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">KODE</label>
            <input
              type="text"
              name="kode"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukan Kode"
              value={formData.kode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">BARANG</label>
            <input
              type="text"
              name="nama"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukan Nama Barang"
              value={formData.nama}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">STOK</label>
            <input
              type="number"
              name="jumlah"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Stok"
              value={formData.jumlah}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">HARGA SEWA</label>
            <input
              type="number"
              name="harga"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukan Harga Sewa"
              value={formData.harga}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">GAMBAR</label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/inventaris")}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              ← Kembali
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              + Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
