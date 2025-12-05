import axios from "axios";

export default class BangDiemRepository {
  async layBangDiemTheoSinhVien(maSinhVien) {
    try {
      const res = await axios.get(`http://103.149.170.20:3000/api/v1/chuongTrinhHocBangDiem/${maSinhVien}`);
      return res.data;
    } catch (err) {
      console.error("Lỗi khi lấy bảng điểm:", err);
      return [];
    }
  }
}