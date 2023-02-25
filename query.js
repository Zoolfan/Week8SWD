// Soal 2 : Buatlah query untuk menampilkan data

const express = require("express");
const router = express.Router();
const pool = require("./connectDB.js");

// 1. Menampilkan data seluruh list film
router.get("/film", (req, res) => {
  const query = `
  SELECT * FROM film ORDER BY film_id ASC`;

  pool.query(query, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(response.rows);
    }
  });
});

// 2. Menampilkan data film tertentu berdasarkan id
router.get("/film/:id", (req, res) => {
  const { id } = req.params;
  const findID = `
  SELECT * FROM film WHERE film_id = ${id}`;

  pool.query(findID, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(response.rows[0]);
    }
  });
});

// 3. Menampilkan data list category
router.get("/category", (req, res) => {
  const query = `
  SELECT * FROM category ORDER BY category_id ASC`;

  pool.query(query, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(response.rows);
    }
  });
});

// 4. Menampilkan data list film berdasarkan category
router.get("/category/:genre", (req, res) => {
  const { genre } = req.params;
  const query = `
  SELECT f.title , f.description, c.name AS genre_film
  FROM film AS f
  JOIN film_category AS fc
  ON f.film_id = fc.film_id
  JOIN category AS c
  ON c.category_id = fc.category_id
  WHERE c.name = '${genre}'
  `;

  pool.query(query, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(response.rows);
    }
  });
});

module.exports = router;
