class SinhVienController {
  constructor(sinhVienUseCase) {
    this.sinhVienUseCase = sinhVienUseCase;
  }

  create = async (req, res) => {
    try {
      const sv = await this.sinhVienUseCase.createSinhVien(req.body);
      res.status(201).json(sv);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getAll = async (req, res) => {
    const list = await this.sinhVienUseCase.getAllSinhVien();
    res.json(list);
  };

  getById = async (req, res) => {
    const sv = await this.sinhVienUseCase.getSinhVienById(req.params.id);
    if (sv) res.json(sv);
    else res.status(404).json({ error: "Not found" });
  };

  update = async (req, res) => {
    const sv = await this.sinhVienUseCase.updateSinhVien(req.params.id, req.body);
    if (sv) res.json(sv);
    else res.status(404).json({ error: "Not found" });
  };

  delete = async (req, res) => {
    const sv = await this.sinhVienUseCase.deleteSinhVien(req.params.id);
    if (sv) res.json(sv);
    else res.status(404).json({ error: "Not found" });
  };
}

module.exports = SinhVienController;
