const SinhVienRepository = require("../../domain/repositories/SinhVienRepository");
const SinhVienModel = require("../sequelize/SinhVienModel");
const SinhVien = require("../../domain/models/SinhVien");

class SinhVienRepositoryImpl extends SinhVienRepository {
  async create(sinhVienData) {
    const sv = await SinhVienModel.create(sinhVienData);
    return new SinhVien(sv.toJSON());
  }

  async findAll() {
    const list = await SinhVienModel.findAll();
    return list.map(sv => new SinhVien(sv.toJSON()));
  }

  async findById(id) {
    const sv = await SinhVienModel.findByPk(id);
    return sv ? new SinhVien(sv.toJSON()) : null;
  }

  async update(id, sinhVienData) {
    await SinhVienModel.update(sinhVienData, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    const sv = await this.findById(id);
    if (sv) {
      await SinhVienModel.destroy({ where: { id } });
      return sv;
    }
    return null;
  }
}

module.exports = SinhVienRepositoryImpl;
