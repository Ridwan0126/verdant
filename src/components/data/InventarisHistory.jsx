"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import EditModal from "./edit-modal";
import DeleteModal from "./delete-modal";
import AddModal from "./add-modal";
import ImagePreviewModal from "./image-preview-modal";

export default function InventoryTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([
    {
      id: "BKD01",
      name: "Tenda Max 4 Orang",
      quantity: 50,
      price: 135000,
      image: null,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "BKD02",
      name: "Matras Camping",
      quantity: 50,
      price: 15000,
      image: null,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "BKD03",
      name: "Meja Camping",
      quantity: 50,
      price: 25000,
      image: null,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "BKD04",
      name: "Kursi Camping",
      quantity: 100,
      price: 25000,
      image: null,
      imageUrl: "/placeholder.svg",
    },
  ]);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setShowImagePreview(true);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(
      items.map((item) =>
        item.id === updatedItem.id
          ? {
              ...updatedItem,
              imageUrl: updatedItem.image
                ? URL.createObjectURL(updatedItem.image)
                : updatedItem.imageUrl,
            }
          : item
      )
    );
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    setItems(items.filter((item) => item.id !== selectedItem.id));
    setShowDeleteModal(false);
  };

  const handleAddItem = (newItem) => {
    const itemId = `BKD${items.length + 1}`.padStart(5, "0");
    setItems([
      ...items,
      {
        ...newItem,
        id: itemId,
        imageUrl: newItem.image
          ? URL.createObjectURL(newItem.image)
          : "/placeholder.svg",
      },
    ]);
    setShowAddModal(false);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Inventaris Barang</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk melihat data serta menambah barang pengunjung
        Agrowisata Tepas Papandayan.
      </p>

      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Total barang saat ini: {items.length} pcs
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pencarian"
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gambar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kode
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Barang
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jumlah
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Harga
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-12 w-12 rounded object-cover cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  />
                </td>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">Rp {item.price.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="p-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
        >
          Tambah Barang
        </button>
      </div>

      {showEditModal && (
        <EditModal
          item={selectedItem}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdateItem}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          item={selectedItem}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteConfirm}
        />
      )}

      {showAddModal && (
        <AddModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddItem}
        />
      )}

      {showImagePreview && (
        <ImagePreviewModal
          item={selectedItem}
          onClose={() => setShowImagePreview(false)}
        />
      )}
    </div>
  );
}
