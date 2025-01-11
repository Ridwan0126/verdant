import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pengaturan = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);

  const handleCancel = () => {
    // Navigasi kembali ke halaman sebelumnya
    navigate(-1); // -1 untuk kembali ke halaman sebelumnya
  };

  const handleSave = () => {
    // Logika untuk menyimpan perubahan
    alert("Perubahan disimpan!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Display the selected image
    }
  };

  return (
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-transparent">Edit Pengaturan Akun</h2>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl font-semibold">Edit Pengaturan Akun</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
          Ini adalah halaman berisi edit foto profil informasi pribadi admin Agrowisata Tepas Papandayan.
        </p>
      </div>

      {/* Edit Foto */}
      <div className="bg-white rounded-lg p-4 md:p-6 mb-6">
        <h2 className="text-center font-semibold mb-4">Edit Foto Profil</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img 
              src={profilePicture || 'https://via.placeholder.com/150'} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <label className="bg-teal-600 text-white px-4 py-2 rounded cursor-pointer">
            Pilih Foto
            <input 
              type="file" 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
          </label>
        </div>
      </div>

      {/* Akun dan Keamanan */}
      <div className="bg-white rounded-lg p-4 md:p-6 mb-6">
        <h2 className="text-center font-semibold mb-4">Edit Informasi Pribadi</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="username" className="text-gray-600">Username</label>
            <input 
              type="text"
              id="username"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="Refiani Julianti"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="phone" className="text-gray-600">No. Handphone</label>
            <input 
              type="tel"
              id="phone"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="0812-1985-3387"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input 
              type="email"
              id="email"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="refianijulianti@gmail.com"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="password" className="text-gray-600">Password Saat Ini</label>
            <input 
              type="password"
              id="password"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="admin00"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="password" className="text-gray-600">Password Baru</label>
            <input 
              type="password"
              id="password"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="admin123"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="password" className="text-gray-600">Konfirmasi Password Baru</label>
            <input 
              type="password"
              id="password"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="admin123"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="address" className="text-gray-600">Alamat</label>
            <input 
              type="text"
              id="address"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="Garut, Jawa Barat"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="bio" className="text-gray-600">Bio</label>
            <input 
              type="text"
              id="bio"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="Pengelola Agrowisata Tepas Papandayan"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5 gap-3">
        <button
          onClick={handleCancel}
          className="bg-[#BE1E2D] text-white px-6 py-2 rounded w-full md:w-auto hover:bg-[#9C1D28]"
        >
          Batal
        </button>
        <button
          onClick={handleSave}
          className="bg-teal-600 text-white px-6 py-2 rounded w-full md:w-auto hover:bg-teal-700"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Pengaturan;
