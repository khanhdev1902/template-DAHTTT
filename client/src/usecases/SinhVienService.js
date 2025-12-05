import SinhVienRepository from "../infrastructure/repositories/SinhVienRepository.js";

export default class SinhVienService {
  constructor() {
    this.repository = new SinhVienRepository();
  }

  async layTatCaSinhVien() {
    return (await this.repository.getSinhVien()).data;
  }

  async laySinhVienTheoID(id) {
    return (await this.repository.getSinhVienById(id)).data;
  }
  async themSinhVien(data) {
    return (await this.repository.createSinhVien(data)).data;
  }
  async capNhatSinhVienTheoID(id, data) {
    return (await this.repository.updateSinhVien(id, data)).data;
  }
  async xoaSinhVienTheoID(id) {
    return (await this.repository.deleteSinhVien(id)).data;
  }
}
