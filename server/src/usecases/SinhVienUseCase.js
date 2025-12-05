class SinhVienUseCase {
  constructor(sinhVienRepository) {
    this.sinhVienRepository = sinhVienRepository;
  }

  async createSinhVien(data) {
    return await this.sinhVienRepository.create(data);
  }

  async getAllSinhVien() {
    return await this.sinhVienRepository.findAll();
  }

  async getSinhVienById(id) {
    return await this.sinhVienRepository.findById(id);
  }

  async updateSinhVien(id, data) {
    return await this.sinhVienRepository.update(id, data);
  }

  async deleteSinhVien(id) {
    return await this.sinhVienRepository.delete(id);
  }
}

module.exports = SinhVienUseCase;
