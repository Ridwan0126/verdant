"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";

export default function EditModal({ item, onClose, onUpdate }) {
  const [imagePreview, setImagePreview] = useState(item.imageUrl);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedItem = {
      ...item,
      name: formData.get("name"),
      quantity: parseInt(formData.get("quantity")),
      price: parseInt(formData.get("price")),
      image: selectedFile || item.image,
      imageUrl: imagePreview,
    };
    onUpdate(updatedItem);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold mb-4">Edit Barang</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kode
              </label>
              <input
                type="text"
                value={item.id}
                disabled
                className="mt-1 block w-full px-3 py-2 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Barang
              </label>
              <input
                type="text"
                name="name"
                defaultValue={item.name}
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jumlah
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={item.quantity}
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Harga
              </label>
              <input
                type="number"
                name="price"
                defaultValue={item.price}
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gambar
              </label>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 border rounded-lg overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer group hover:bg-opacity-60">
                    <ImagePlus className="w-6 h-6 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="text-sm text-gray-500">
                  Klik gambar untuk mengubah
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
