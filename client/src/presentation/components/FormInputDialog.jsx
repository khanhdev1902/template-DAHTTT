import React from "react";
import SinhVienService from "../../usecases/SinhVienService";

export default function FormInputDialog({
  setIsUpdate,
  form,
  setForm,
  setOpen,
  handleChange,
  handleDelete,
  handleSubmit,
}) {
  console.log(form);
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-3xl min-h-72 min-w-[600px] shadow-sm flex flex-col px-5 py-5  text-gray-700">
        <div className=" text-xl font-bold mb-10">Thông tin sinh viên</div>
        <div className="flex-grow">
          <div className=" flex flex-col gap-1">
            <label className=" font-bold pt-2">Tên</label>
            <input
              type="text"
              name="name"
              value={form?.name}
              onChange={handleChange}
              placeholder="Nhập tên..."
              className=" focus:outline-none border rounded-xl px-3 py-2"
            />

            <label className=" font-bold pt-2">Tuổi</label>
            <input
              type="number"
              name="age"
              value={form?.age}
              onChange={handleChange}
              placeholder="Nhập tuổi..."
              className=" focus:outline-none border rounded-xl px-3 py-2"
            />

            <label className=" font-bold pt-2">email</label>
            <input
              type="text"
              name="email"
              value={form?.email}
              onChange={handleChange}
              placeholder="Nhập email..."
              className=" focus:outline-none border rounded-xl px-3 py-2"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end gap-2 pt-10">
          <button
            onClick={() => {
              setOpen(false);
              setIsUpdate(false);
              setForm({ id: 0, name: "", age: 0, email: "" });
            }}
            className="px-5 py-2 border shadow-sm rounded-xl color-primary font-bold hover:scale-105 active:scale-95 duration-300"
          >
            Hủy bỏ
          </button>
          {form?.id !== 0 && (
            <button
              onClick={() => handleDelete(form?.id)}
              className="px-5 py-2 border shadow-sm rounded-xl color-primary font-bold hover:scale-105 active:scale-95 duration-300"
            >
              Xóa
            </button>
          )}
          <button
            onClick={() => handleSubmit()}
            className="px-5 py-2 border shadow-sm rounded-xl color-primary font-bold hover:scale-105 active:scale-95 duration-300"
          >
            Lưu thông tin
          </button>
        </div>
      </div>
    </div>
  );
}
