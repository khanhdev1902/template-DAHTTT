import React, { useState } from "react";
import BangDiemService from "../../usecases/BangDiemService.js";

export default function BangDiemPage() {
  const [maSinhVien, setMaSinhVien] = useState("A46746");
  const [bangDiem, setBangDiem] = useState([]);
  const service = new BangDiemService();

  const handleFetchBangDiem = async () => {
    const data = await service.layBangDiem(maSinhVien);
    setBangDiem(data);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Bảng điểm sinh viên</h2>

      {/* Form nhập mã sinh viên */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={maSinhVien}
          onChange={(e) => setMaSinhVien(e.target.value)}
          placeholder="Nhập mã sinh viên"
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={handleFetchBangDiem}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Xem bảng điểm
        </button>
      </div>

      {/* Bảng điểm */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="border p-2">Mã HP</th>
            <th className="border p-2">Tên học phần</th>
            <th className="border p-2">Điểm</th>
			<th className="border p-2">Số tín chỉ</th>
            <th className="border p-2">Tiên quyết</th>
            <th className="border p-2">Giảng viên</th>
          </tr>
        </thead>
        <tbody>
          {bangDiem.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border p-2">{item.maHocPhan}</td>
              <td className="border p-2">{item.tenHocPhan}</td>
		      <td className="border p-2">{item.diemTongKet}</td>
              <td className="border p-2">{item.soTinChi}</td>
              <td className="border p-2">{item.tienQuyet}</td>
              <td className="border p-2">{item.maGiangVien}</td>
            </tr>
          ))}
          {bangDiem.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-4">Chưa có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}