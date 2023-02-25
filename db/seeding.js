// Soal 1: Lakukan seeding

const pool = require("../connectDB.js");
const fs = require("fs");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
  if (err) {
    console.log(err);
    console.log("Seeding gagal");
  } else {
    console.log("Seeding berhasil");
  }
  pool.end();
});
