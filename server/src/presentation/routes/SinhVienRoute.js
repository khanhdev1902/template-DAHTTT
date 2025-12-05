const express = require("express");
const router = express.Router();
const SinhVienUseCase = require("../../usecases/SinhVienUseCase");
const SinhVienRepositoryImpl = require("../../infrastructure/repositories/SinhVienRepositoryImpl");
const SinhVienController = require("../controllers/SinhVienController");

const repository = new SinhVienRepositoryImpl();
const useCase = new SinhVienUseCase(repository);
const controller = new SinhVienController(useCase);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
