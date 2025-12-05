require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    logging: process.env.DB_LOGGING === "true",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");

    // Đồng bộ model
    await sequelize.sync({ alter: process.env.DB_SYNC === "alter" });
    console.log("✅ All models were synchronized successfully!");
  } catch (err) {
    console.error("❌ Unable to connect or sync DB:", err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
