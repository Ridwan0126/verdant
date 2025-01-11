import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InventarisManagement = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleDetailClick = () => {
    navigate(`/inventaris`);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 md:pl-64 bg-gray-100">
      {/* Title Section */}
      <div className="mb-6 px-3">
        <h2 className="text-2xl font-bold mb-2 text-start text-transparent">
          Kelola Inventaris
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-start">
          Kelola Inventaris
        </h2>
        <p className="text-gray-600 text-sm text-start">
          Ini adalah halaman untuk mengelola inventaris Agwowisata Tepas
          Papandayan.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg p-4 ml-4">
        {" "}
        {/* Added ml-4 to shift box to the right */}
        <h3 className="text-lg font-bold mb-6">ENTRI DATA</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">KODE</label>
            <input
              type="text"
              placeholder="Masukan Kode"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">BARANG</label>
              <input
                type="text"
                placeholder="Masukan Nama Barang"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">STOK</label>
              <input
                type="text"
                placeholder="Stok"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              HARGA SEWA
            </label>
            <input
              type="text"
              placeholder="Masukan Harga Sewa"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-semibold mb-2">GAMBAR</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {image && (
              <div className="mt-4">
                <img src={image} alt="Uploaded" className="w-full max-w-md" />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <button
              className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
              onClick={handleDetailClick}
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
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali
            </button>
            <button className="w-full sm:w-auto bg-teal-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventarisManagement;
