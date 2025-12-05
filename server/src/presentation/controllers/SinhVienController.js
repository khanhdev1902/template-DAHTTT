class SinhVienController {
  constructor(sinhVienUseCase) {
    this.sinhVienUseCase = sinhVienUseCase;
  }

  create = async (req, res) => {
    try {
      const sv = await this.sinhVienUseCase.createSinhVien(req.body);
      res
        .status(201)
        .json({ success: true, message: "Thêm mới thành công!", data: sv });
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message, message: "create - Email đã tồn tại !" });
    }
  };

  getAll = async (req, res) => {
    const list = await this.sinhVienUseCase.getAllSinhVien();
    res.json({ success: true, data: list });
  };

  getById = async (req, res) => {
    const sv = await this.sinhVienUseCase.getSinhVienById(req.params.id);
    if (sv) res.json({ success: true, data: sv });
    else res.status(404).json({ error: "getById - Not found Id" });
  };

  update = async (req, res) => {
    const sv = await this.sinhVienUseCase.updateSinhVien(
      req.params.id,
      req.body
    );
    if (sv)
      res.json({ success: true, message: "update thành công!", data: sv });
    else res.status(404).json({ error: "update - Not found" });
  };

  delete = async (req, res) => {
    const sv = await this.sinhVienUseCase.deleteSinhVien(req.params.id);
    if (sv) res.json({ success: true, message: "Xóa thành công!", data: sv });
    else res.status(404).json({ error: "delete - Not found" });
  };
}

module.exports = SinhVienController;
