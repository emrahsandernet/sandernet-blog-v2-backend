const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContactModel = sequelize.define(
  "contact_form",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "contact_forms", // Tablo adını belirtiyoruz
    timestamps: false, // createdAt ve updatedAt alanlarının otomatik olarak güncellenmesini sağlıyoruz
  }
);

module.exports = ContactModel;
