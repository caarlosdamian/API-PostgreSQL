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
const getAll = async (req, res) => {
  const response = await pool.query("select * from nodos;");
  res.status(200).json(response.rows);
};
const getnodeByid = async (req, res) => {
  const response = await pool.query("SELECT * FROM nodos WHERE id = $1", [
    req.params.id,
  ]);
  res.status(200).json(response.rows);
};
const createNode = async (req, res) => {
  const { name, description } = req.body;
  const response = await pool.query(
    "INSERT INTO nodos (name, description) VALUES ($1, $2)",
    [name, description]
  );
  console.log(response);
  res.send("Node created");
};
const updateNode = async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  const response = await pool.query(
    "UPDATE nodos SET name=$1 , description = $2 WHERE id=$3",
    [name, description, id]
  );
  res.send("Nodo actualizado");
};
const deleteNode = async (req, res) => {
  const response = await pool.query("DELETE FROM nodos WHERE id=$1", [
    req.params.id,
  ]);
  res.send("NODE DELETE ");
};
const updateActuador = async (req, res) => {
  const nombre_sensor = req.params.id;
  const { actuador } = req.body;
  const response = await pool.query(
    "UPDATE datos_sensor SET actuador=$1  WHERE nombre_sensor=$2",
    [actuador, nombre_sensor]
  );
  res.send("Actuador actualizado ");
};

module.exports = {
  getCannabis,
  getCactus,
  getLimon,
  getZacate,
  getFlores,
  getArbol,
  getMota,
  getAll,
  createNode,
  getnodeByid,
  deleteNode,
  updateNode,
  updateActuador,
};
