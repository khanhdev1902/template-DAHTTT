require("dotenv").config();
const express = require("express");
const { connectDB } = require("./infrastructure/config/db");
const sinhVienRoutes = require("./presentation/routes/SinhVienRoute");

const app = express();
app.use(express.json());

// Routes
app.use("/sinhvien", sinhVienRoutes);

const PORT = process.env.PORT || 3000;

// Connect DB rồi start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
