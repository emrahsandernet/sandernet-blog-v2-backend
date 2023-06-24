const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog", "postgres", "ardahan91185", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

// Veritabanı bağlantısını test etmek için kullanılabilir
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = sequelize;
