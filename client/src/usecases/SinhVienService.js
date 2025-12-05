import SinhVienRepository from "../infrastructure/repositories/SinhVienRepository.js";

export default class SinhVienService {
  constructor() {
    this.repository = new SinhVienRepository();
  }

  async laySinhVien() {
    return await this.repository.getSinhVien();
  }
}