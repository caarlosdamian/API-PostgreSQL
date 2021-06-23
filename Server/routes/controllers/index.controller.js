const { Pool } = require("pg");

const pool = new Pool({
  host: "otto.db.elephantsql.com",
  user: "omcbltzd",
  password: "jhwW6_oAKjaxxlFCTdnKrh8OY6o-ikYb",
  database: "omcbltzd",
});

const getCannabis = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('cannabis') limit 100;"
  );
  res.json(response.rows);
};
const getCactus = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('cactus') limit 100;"
  );
  res.json(response.rows);
};
const getLimon = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('limon') limit 100;"
  );
  res.json(response.rows);
};
const getZacate = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('zacate') limit 100;"
  );
  res.json(response.rows);
};
const getFlores = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('Flores') limit 100;"
  );
  res.json(response.rows);
};
const getArbol = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('arbol') limit 100;"
  );
  res.json(response.rows);
};
const getMota = async (req, res) => {
  const response = await pool.query(
    "select * from datos_sensor where nombre_sensor in ('mota') limit 100;"
  );
  res.json(response.rows);
};

module.exports = {
  getCannabis,
  getCactus,
  getLimon,
  getZacate,
  getFlores,
  getArbol,
  getMota
};
