import { Newspaper, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center px-10 py-4 shadow-sm w-full">
      <div className="flex flex-row gap-3 items-center">
        <Newspaper size={36} className="text-[#c02425]" />
        <span className="text-3xl font-bold color-primary">
          Quản lý sinh viên
        </span>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Bell size={36} className="rounded-full p-2 border" />
        <div className=" rounded-3xl py-2 px-4 shadow-sm border border-[#c0242431] color-primary font-bold">A45544-NGUYỄN VĂN KHANH</div>
      </div>
    </header>
  );
}
