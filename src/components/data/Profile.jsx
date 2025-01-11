import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Bahasa Indonesia");
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/pengaturan`);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen overflow-auto bg-gray-100">
      <div className="mb-6">
      <h2 className="text-2xl font-semibold text-transparent">Pengaturan</h2>
      <div className="flex items-center gap-4 mb-4">
      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
          <h2 className="text-2xl font-semibold">Pengaturan</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
        Ini adalah halaman berisi profil admin dan pengaturan website Agrowisata Tepas Papandayan.
        </p>
      </div>
    
      <div className="flex items-center mb-8">
        <img 
          src="https://th.bing.com/th/id/OIP.9PPdes_WSxaqUQJxWab16AHaHa?rs=1&pid=ImgDetMain" 
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold text-start">Refiani Julianti</h2>
          <p className="text-gray-600 text-start">Pengelola Agrowisata Tepas Papandayan</p>
          <p className="text-gray-600 text-start">Garut, Jawa Barat</p>
        </div>
      </div>

      {/* Informasi Pribadi */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h3 className="text-xl font-bold mb-6 text-center">Informasi Pribadi</h3>
        
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Username</p>
            <p className="text-gray-600">Refiani Julianti</p>
          </div>
          
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Nomor Telepon</p>
            <p className="text-gray-600">0812-1985-3387</p>
          </div>

          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">refianijulianti@gmail.com</p>
          </div>

          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Password</p>
            <p className="text-gray-600">admin123</p>
          </div>

          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Alamat</p>
            <p className="text-gray-600">Garut, Jawa Barat</p>
          </div>

          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Bio</p>
            <p className="text-gray-600">Pengelola Agrowisata Tepas Papandayan</p>
          </div>
        </div>
        <button className="mx-auto m-5 bg-teal-600 text-white px-4 py-2 rounded"
        onClick={handleDetailClick}>Edit
        </button>
      </div>

      {/* Pengaturan Notifikasi */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Pengaturan Notifikasi</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Notifikasi di Website</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Bunyi Notifikasi</span>
            <select className="bg-gray-100 px-4 py-2 rounded">
              <option>(Default)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pengaturan Bahasa */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Pengaturan Bahasa</h2>
        <div className="space-y-2">
          <div 
            className={`flex items-center bg-gray-100 px-4 py-2 rounded ${selectedLanguage === "Bahasa Indonesia" ? "bg-teal-100" : ""}`} 
            onClick={() => handleLanguageChange("Bahasa Indonesia")}
          >
            <span className="flex-1">Bahasa Indonesia</span>
            {selectedLanguage === "Bahasa Indonesia" && (
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div 
            className={`flex items-center bg-gray-100 px-4 py-2 rounded ${selectedLanguage === "English" ? "bg-teal-100" : ""}`} 
            onClick={() => handleLanguageChange("English")}
          >
            <span className="flex-1">English</span>
            {selectedLanguage === "English" && (
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
