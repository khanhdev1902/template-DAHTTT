import React from "react";
import { Link } from "react-router-dom";

export default function MenuLeft() {
  return <aside className="w-64 bg-gray-200 p-4 border-r border-gray-300">
    <ul className="space-y-3">
      <li><Link to="/" className="block p-2 bg-white rounded hover:bg-blue-100 text-blue-700 font-medium">Sinh Viên</Link></li>
      <li><Link to="/bangdiem" className="block p-2 bg-white rounded hover:bg-blue-100 text-blue-700 font-medium">Bảng Điểm</Link></li>
    </ul>
  </aside>;
}