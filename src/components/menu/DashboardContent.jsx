// src/components/DashboardContent.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrasi komponen ChartJS yang diperlukan
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent = () => {
  // Data untuk grafik pemasukan
  const financialData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Pemasukan',
        data: [10000000, 11000000, 10500000, 12000000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Pengeluaran',
        data: [5000000, 5500000, 5200000, 6000000],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Laba Bersih',
        data: [5000000, 5500000, 5300000, 6000000],
        borderColor: 'rgb(255, 205, 86)',
        tension: 0.1,
      },
    ],
  };

  // Data untuk grafik pengunjung
  const visitorData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Pengunjung Dewasa',
        data: [200, 250, 230, 280],
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      {
        label: 'Pengunjung Anak',
        data: [100, 120, 110, 130],
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1,
      },
    ],
  };

  // Data untuk grafik pembelian tiket
  const ticketData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Tiket Dewasa',
        data: [150, 180, 160, 200],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Tiket Anak-Anak',
        data: [80, 100, 90, 110],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1,
      },
      {
        label: 'Pembelian Paket',
        data: [300, 250, 240, 280],
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1,
      },
    ],
  };

  // Data untuk grafik keramahan
  const satisfactionData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Tidak Ramah',
        data: [50, 40, 45, 35],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Agak Ramah',
        data: [100, 120, 110, 130],
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1,
      },
      {
        label: 'Sangat Ramah',
        data: [200, 180, 190, 220],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-transparent">Dashboard</h2>
    <div className="flex items-center gap-4 mb-4">
      {/* Ikon Dashboard */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
    </div>
    <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
      Ini adalah halaman untuk menampilkan informasi secara visual di Agrowisata Tepas Papandayan.
    </p>
  </div>

    {/* Kartu Statistik */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Jumlah Pemasukan */}
      <div className="p-4 bg-green-100 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-800">Jumlah Pemasukan</h2>
        <p className="text-xl font-bold text-gray-900">Rp10.000.000</p>
      </div>

      {/* Jumlah Pengeluaran */}
      <div className="p-4 bg-red-100 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-800">Jumlah Pengeluaran</h2>
        <p className="text-xl font-bold text-gray-900">Rp5.000.000</p>
      </div>

      {/* Jumlah Uang Tunai */}
      <div className="p-4 bg-blue-100 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-800">Jumlah Uang Tunai</h2>
        <p className="text-xl font-bold text-gray-900">Rp12.000.000</p>
      </div>

      {/* Laba Bersih */}
      <div className="p-4 bg-yellow-100 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-800">Laba Bersih</h2>
        <p className="text-xl font-bold text-gray-900">Rp8.000.000</p>
      </div>
    </div>

      {/* Grafik Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Grafik Pemasukan, Pengeluaran, dan Laba Bersih</h2>
              <Line data={financialData} options={options} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Grafik Pengunjung Dewasa dan Anak-Anak</h2>
              <Line data={visitorData} options={options} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Grafik Pembelian Tiket</h2>
              <Line data={ticketData} options={options} />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Grafik Keramahan Pengunjung</h2>
              <Line data={satisfactionData} options={options} />
            </div>
          </div>
        </div>
    </>
  );
};

export default DashboardContent;