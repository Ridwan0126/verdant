import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TransactionList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions] = useState([
    {
      id: "NPM15YT",
      date: "13 Oktober 2023",
      name: "Ayumi Ningsih",
      ticketType: "Tiket Masuk Dewasa",
      amount: "Rp 5.000",
      status: "Berhasil",
      category: "Tiket Masuk",
      paymentMethod: "Transfer Bank",
      transactionTime: "12.39 WIB",
    },
    {
      id: "NPM16YT",
      date: "13 Oktober 2023",
      name: "Michael Wicaksono",
      ticketType: "Tiket Masuk Anak",
      amount: "Rp 200.000",
      status: "Berhasil",
      category: "Tiket Masuk",
      paymentMethod: "Transfer Bank",
      transactionTime: "13.45 WIB",
    },
    {
      id: "NPM17YT",
      date: "13 Oktober 2023",
      name: "Padila Uvaira",
      ticketType: "Camping Biasa",
      amount: "Rp 10.000",
      status: "Berhasil",
      category: "Camping",
      paymentMethod: "Gopay",
      transactionTime: "14.00 WIB",
    },
    {
      id: "NPM18YT",
      date: "13 Oktober 2023",
      name: "Caca",
      ticketType: "Tiket Masuk Anak",
      amount: "Rp 5.000",
      status: "Berhasil",
      category: "Tiket Masuk",
      paymentMethod: "OVO",
      transactionTime: "14.15 WIB",
    },
  ]);

  const navigate = useNavigate();

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.ticketType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Transaksi</h1>
        <button className="ml-2">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk melihat data serta menambah detail tiket
        pengunjung Agrowisata Tepas Papandayan.
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Riwayat Transaksi</h2>
            <p className="text-gray-600">
              Total transaksi saat ini: 1.324 transaksi
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Filter
            </button>
            <input
              type="text"
              placeholder="Pencarian"
              className="px-4 py-2 border rounded-lg w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left">TANGGAL</th>
                <th className="py-3 text-left">NAMA PENGUNJUNG</th>
                <th className="py-3 text-left">JENIS TIKET</th>
                <th className="py-3 text-left">NOMINAL</th>
                <th className="py-3 text-left">STATUS</th>
                <th className="py-3 text-left">DETAIL</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-4">{transaction.date}</td>
                  <td className="py-4">{transaction.name}</td>
                  <td className="py-4">{transaction.ticketType}</td>
                  <td className="py-4">{transaction.amount}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() =>
                        navigate(`/transaction/${transaction.id}`, {
                          state: { transaction },
                        })
                      }
                      className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-600">
            Showing 1 to 5 of 1,324 entries
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              3
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
