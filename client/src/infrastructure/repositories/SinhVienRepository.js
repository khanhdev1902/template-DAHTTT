import http from "./httpClient";

export default class SinhVienRepository {
  getSinhVien = () => http.get("/sinhvien");
  getSinhVienById = (id) => http.get(`/sinhvien/${id}`);
  createSinhVien = (data) => http.post("/sinhvien", data);
  updateSinhVien = (id, data) => http.put(`/sinhvien/${id}`, data);
  deleteSinhVien = (id) => http.delete(`/sinhvien/${id}`);
}
