import { useNavigate, useLocation } from "react-router-dom";

export default function TransactionDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const transaction = location.state?.transaction;

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Detail Transaksi</h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman untuk melihat detail transaksi pengunjung Agrowisata
        Tepas Papandayan yang masuk.
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">No Transaksi</span>
            <span className="font-medium">{transaction.id}</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Nama</span>
            <span className="font-medium">{transaction.name}</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Kategori</span>
            <span className="font-medium">{transaction.category}</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Tanggal Transaksi</span>
            <span className="font-medium">{`${transaction.date} - ${transaction.transactionTime}`}</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Metode Pembayaran</span>
            <span className="font-medium">{transaction.paymentMethod}</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Total Bayar</span>
            <span className="font-medium">{transaction.amount}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-600">Status</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
              {transaction.status}
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
