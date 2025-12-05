import React, { useEffect, useState } from "react";
import SinhVienService from "../../usecases/SinhVienService.js";

export default function SinhVienPage() {
  const [sinhVien, setSinhVien] = useState([]);
  const service = new SinhVienService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await service.laySinhVien();
      setSinhVien(data);
    };
    fetchData();
  }, []);

  return <div>
    <h2 className="text-xl font-semibold mb-4">Thông tin sinh viên</h2>
    <ul>
      {sinhVien.map((sv) => (<li key={sv.id}>{sv.ten} - {sv.maSV} - {sv.lop} - {sv.khoa}</li>))}
    </ul>
  </div>;
}