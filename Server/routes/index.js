const { Router } = require("express");
const router = Router();
const {
  getCannabis,
  getCactus,
  getLimon,
  getZacate,
  getFlores,
  getArbol,
  getMota,
  getAll,
} = require("./controllers/index.controller");
router.get("/all", getAll);
router.get("/cannabis", getCannabis);
router.get("/cactus", getCactus);
router.get("/limon", getLimon);
router.get("/zacate", getZacate);
router.get("/flores", getFlores);
router.get("/arbol", getArbol);
router.get("/mota", getMota);
module.exports = router;
