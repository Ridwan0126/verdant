import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
import EditModal from "../components/EditPegawai";
import DeleteModal from "../components/DeletePegawai";

function DataPegawai({ employees, setEmployees }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deletingEmployee, setDeletingEmployee] = useState(null);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleDelete = (employee) => {
    setDeletingEmployee(employee);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.nip === updatedEmployee.nip ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = () => {
    setEmployees(employees.filter((emp) => emp.nip !== deletingEmployee.nip));
    setDeletingEmployee(null);
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4 mt-5 mb-10 py-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Data Pegawai</h1>
      <p className="text-gray-600 mb-4">
        Ini adalah halaman untuk melihat data pegawai Agrowisata Tepas
        Papandayan.
      </p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Pencarian"
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">NIP</th>
              <th className="p-4 text-left">NAMA</th>
              <th className="p-4 text-left">POSISI</th>
              <th className="p-4 text-left">NO HP</th>
              <th className="p-4 text-left">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.nip} className="border-b">
                <td className="p-4">{employee.nip}</td>
                <td className="p-4">{employee.nama}</td>
                <td className="p-4">{employee.posisi}</td>
                <td className="p-4">{employee.noHp}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleEdit(employee)}
                    className="bg-green-500 text-white p-2 rounded mr-2"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(employee)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span>Showing 1 to 5 of 1.324 entries</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            1
          </button>
          <button className="px-4 py-2 border rounded">2</button>
          <button className="px-4 py-2 border rounded">3</button>
          <button className="px-4 py-2 border rounded">Next</button>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/kelola-pegawai"
          className="bg-green-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Kelola Pegawai
        </Link>
      </div>

      {editingEmployee && (
        <EditModal
          employee={editingEmployee}
          onClose={() => setEditingEmployee(null)}
          onUpdate={handleUpdateEmployee}
        />
      )}

      {deletingEmployee && (
        <DeleteModal
          onClose={() => setDeletingEmployee(null)}
          onConfirm={handleDeleteEmployee}
        />
      )}
    </div>
  );
}

export default DataPegawai;
