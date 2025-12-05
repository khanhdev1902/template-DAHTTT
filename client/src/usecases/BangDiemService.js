import BangDiemRepository from "../infrastructure/repositories/BangDiemRepository.js";

export default class BangDiemService {
  constructor() {
    this.repository = new BangDiemRepository();
  }

  async layBangDiem(maSinhVien) {
    return await this.repository.layBangDiemTheoSinhVien(maSinhVien);
  }
}