import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, Image } from "lucide-react";
import tendaImg from "../../assets/tenda.png";
import matrasImg from "../../assets/matras.png";
import mejaImg from "../../assets/meja.png";
import kursiImg from "../../assets/kursi.png";

const initialData = [
  {
    kode: "BKD01",
    nama: "Tenda Max 4 Orang",
    jumlah: 50,
    harga: 135000,
    gambar: tendaImg,
  },
  {
    kode: "BKD02",
    nama: "Matras Camping",
    jumlah: 50,
    harga: 15000,
    gambar: matrasImg,
  },
  {
    kode: "BKD03",
    nama: "Meja Camping",
    jumlah: 50,
    harga: 25000,
    gambar: mejaImg,
  },
  {
    kode: "BKD04",
    nama: "Kursi Camping",
    jumlah: 100,
    harga: 25000,
    gambar: kursiImg,
  },
];

export default function InventoryList() {
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem("inventory"));
    if (!storedInventory) {
      localStorage.setItem("inventory", JSON.stringify(initialData));
      setInventory(initialData);
    } else {
      setInventory(storedInventory);
    }
  }, []);

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
    setShowImageModal(true);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedInventory = inventory.map((item) =>
      item.kode === updatedItem.kode ? updatedItem : item
    );
    setInventory(updatedInventory);
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    const updatedInventory = inventory.filter(
      (item) => item.kode !== selectedItem.kode
    );
    setInventory(updatedInventory);
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
    setShowDeleteModal(false);
  };

  const filteredInventory = inventory.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Inventaris Barang</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk melihat data serta menambah barang pengunjung
        Agrowisata Tepas Papandayan.
      </p>

      <div className="flex justify-between items-center mb-6">
        <p>Total barang saat ini: {inventory.length} pcs</p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Pencarian"
            className="border rounded-lg px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gray-200 px-4 py-2 rounded-lg">Filter</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left">GAMBAR</th>
              <th className="px-6 py-3 text-left">KODE</th>
              <th className="px-6 py-3 text-left">NAMA BARANG</th>
              <th className="px-6 py-3 text-left">JUMLAH</th>
              <th className="px-6 py-3 text-left">HARGA</th>
              <th className="px-6 py-3 text-left">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.kode} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-16 h-16 object-cover cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  />
                </td>
                <td className="px-6 py-4">{item.kode}</td>
                <td className="px-6 py-4">{item.nama}</td>
                <td className="px-6 py-4">{item.jumlah}</td>
                <td className="px-6 py-4">Rp {item.harga.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/kelola-inventaris")}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Tambah Barang
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Barang</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateItem({
                  ...selectedItem,
                  nama: e.target.nama.value,
                  jumlah: parseInt(e.target.jumlah.value),
                  harga: parseInt(e.target.harga.value),
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block mb-1">Nama Barang</label>
                <input
                  name="nama"
                  defaultValue={selectedItem.nama}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1">Jumlah</label>
                <input
                  name="jumlah"
                  type="number"
                  defaultValue={selectedItem.jumlah}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1">Harga</label>
                <input
                  name="harga"
                  type="number"
                  defaultValue={selectedItem.harga}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
            <p className="mb-6">
              Apakah Anda yakin ingin menghapus {selectedItem.nama}?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="relative">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 bg-white rounded-full p-2"
            >
              <Image size={24} />
            </button>
            <img
              src={selectedItem.gambar}
              alt={selectedItem.nama}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
