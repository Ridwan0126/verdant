import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import DashboardContent from "./components/menu/DashboardContent";
import TransactionDetail from "./components/menu/TransactionDetail";
import TransactionHistory from "./components/menu/TransactionHistory";
import TicketHistory from "./components/menu/TicketHistory";
import TicketManagement from "./components/menu/TicketManagement";
import InventarisHistory from "./components/data/InventarisHistory";
import InventarisManagement from "./components/data/InventarisManagement";
import PegawaiHistory from "./components/data/PegawaiHistory";
import PegawaiManagement from "./components/data/PegawaiManagement";
import PengunjungHistory from "./components/data/PengunjungHistory";
import Pengaturan from "./components/data/Pengaturan";
import Profile from "./components/data/Profile";
import Login from "./components/login";
import Sidebar from "./components/sidebar";
import KelolaTiket from "./components/menu/TicketManagement";
import KonfirmasiTiket from "./components/menu/TicketHistory";
import { TicketProvider } from "./components/context/TicketContext";

function App() {
  const [employees, setEmployees] = useState([
    {
      nip: "123123124",
      nama: "Refiana",
      posisi: "Marketing",
      noHp: "32132130",
    },
    { nip: "123123121", nama: "Nina", posisi: "Kasir", noHp: "321321312" },
    { nip: "123123123", nama: "Chika", posisi: "Pengelola", noHp: "321321311" },
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };
  return (
    <TicketProvider>
      <Router>
        <Routes>
          {/* Redirect dari root ke login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Rute Login */}
          <Route path="/login" element={<Login />} />

          {/* Rute yang membutuhkan sidebar */}
          <Route
            path="/dashboard"
            element={
              <div>
                <Sidebar />
                <DashboardContent />
              </div>
            }
          />
          <Route
            path="/transaction"
            element={
              <div>
                <Sidebar />
                <TransactionHistory />
              </div>
            }
          />
          <Route
            path="/transaction/:id"
            element={
              <div>
                <Sidebar />
                <TransactionDetail />
              </div>
            }
          />
          <Route
            path="/tiket"
            element={
              <div>
                <Sidebar />
                <TicketHistory element={<KonfirmasiTiket />} />
              </div>
            }
          />
          <Route
            path="/kelola-tiket"
            element={
              <div>
                <Sidebar />
                <TicketManagement element={<KelolaTiket />} />
              </div>
            }
          />
          <Route
            path="/inventaris"
            element={
              <div>
                <Sidebar />
                <InventarisHistory />
              </div>
            }
          />
          <Route
            path="/kelola-inventaris"
            element={
              <div>
                <Sidebar />
                <InventarisManagement />
              </div>
            }
          />
          <Route
            path="/pegawai"
            element={
              <div>
                <Sidebar />
                <PegawaiHistory
                  employees={employees}
                  setEmployees={setEmployees}
                />
              </div>
            }
          />
          <Route
            path="/kelola-pegawai"
            element={
              <div>
                <Sidebar />
                <PegawaiManagement addEmployee={addEmployee} />
              </div>
            }
          />
          <Route
            path="/pengunjung"
            element={
              <div>
                <Sidebar />
                <PengunjungHistory />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>
                <Sidebar />
                <Profile />
              </div>
            }
          />
          <Route
            path="/pengaturan"
            element={
              <div>
                <Sidebar />
                <Pengaturan />
              </div>
            }
          />
        </Routes>
      </Router>
    </TicketProvider>
  );
}

export default App;
