const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const SinhVienModel = sequelize.define(
  "SinhVien",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    },
  },
  {
    tableName: "SinhVien",
    timestamps: false,
  }
);

module.exports = SinhVienModel;
