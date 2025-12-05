import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./presentation/components/Header.jsx";
import Footer from "./presentation/components/Footer.jsx";
import SinhVienPage from "./presentation/pages/SinhVienPage.jsx";
import BangDiemPage from "./presentation/pages/BangDiemPage.jsx";
import SideBar from "./presentation/components/SideBar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <SideBar />
          <main className="flex-1 p-4 overflow-y-auto bg-white shadow-inner">
            <Routes>
              <Route path="/" element={<SinhVienPage />} />
              <Route path="/bangdiem" element={<BangDiemPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
