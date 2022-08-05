import { Sequelize } from "sequelize";

const db = new Sequelize('coba_express', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

console.log("Koneksi database OK");

export default db;
