import React, { useEffect, useState } from "react";
import SinhVienService from "../../usecases/SinhVienService.js";
import { SquarePen } from "lucide-react";
import FormInputDialog from "../components/FormInputDialog.jsx";

export default function SinhVienPage() {
  const [lstSinhVien, setLstSinhVien] = useState([]);
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [search, setSearch] = useState("");
  const service = new SinhVienService();
  const [form, setForm] = useState({
    id: 0,
    name: "",
    age: 0,
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await service.layTatCaSinhVien();
      console.log(res);
      setLstSinhVien(res.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const reFreshData = async () => {
    const res = await service.layTatCaSinhVien();
    console.log(res);
    setLstSinhVien(res.data);
  };

  const handleDelete = async (id) => {
    const res = await service.xoaSinhVienTheoID(id);
    console.log(res);
    await reFreshData();
    setIsUpdate(false);
    setOpen(false);
  };
  const handleSubmit = async () => {
    if (isUpdate) {
      const res = await service.capNhatSinhVienTheoID(form?.id, form);
      console.log(res);
    } else {
      const res = await service.themSinhVien(form);
      console.log(res);
    }
    await reFreshData();
    setIsUpdate(false);
    setOpen(false);
    setForm({
      id: 0,
      name: "",
      age: 0,
      email: "",
    });
    console.log(form);
  };

  const filteredList = lstSinhVien.filter((sv) =>
  sv.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="px-10 py-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center px-5 py-2 border rounded-3xl shadow-sm gap-5">
          <input
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Tìm kiếm..."
            className=" focus:outline-none"
          />
          <button className="border rounded-3xl px-5 py-2 shadow-sm hover:scale-105 active:scale-95 duration-300 color-primary font-bold">
            Tìm kiếm
          </button>
        </div>
        <div className="flex flex-row gap-5">
          <button
            onClick={() => reFreshData()}
            className="border px-8 py-2 shadow-sm rounded-3xl hover:scale-105 active:scale-95 duration-300 color-primary font-bold"
          >
            Làm mới danh sách
          </button>
          <button
            onClick={() => {
              setOpen(true);
              setForm({ id: 0, name: "", age: 0, email: "" });
            }}
            className="border px-8 py-2 shadow-sm rounded-3xl hover:scale-105 active:scale-95 duration-300 color-primary font-bold"
          >
            Thêm sinh viên mới
          </button>
        </div>
      </div>

      <h2 className="text-2xl mb-4 color-primary font-bold mt-14">
        Danh sách sinh viên
      </h2>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th className="p-2">Tên Sinh Viên</th>
            <th className="p-2">Tuổi</th>
            <th className="p-2">Email</th>
            <th className="p-2">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50 border-b">
              <td className="p-2 text-center">{item.name}</td>
              <td className="p-2 text-center">{item.age}</td>
              <td className="p-2 text-center">{item.email}</td>
              <td className="p-2 flex justify-center items-center">
                <SquarePen
                  onClick={() => {
                    setForm(item);
                    setIsUpdate(true);
                    setOpen(true);
                  }}
                  size={24}
                  className="text-orange-800 hover:scale-110 active:scale-90 duration-300 cursor-pointer select-none"
                />
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan={5}
              className=" text-center text-gray-700 py-5 select-none "
            >
              {lstSinhVien.length === 0
                ? "Chưa có dữ liệu"
                : "Danh sách sinh viên"}
            </td>
          </tr>
        </tbody>
      </table>
      {open && (
        <FormInputDialog
          setIsUpdate={setIsUpdate}
          form={form}
          setForm={setForm}
          setOpen={setOpen}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
