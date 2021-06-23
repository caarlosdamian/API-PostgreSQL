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
  createNode,
  getnodeByid,
  deleteNode,
  updateNode,
} = require("./controllers/index.controller");
router.get("/nodes", getAll);
router.get("/cannabis", getCannabis);
router.get("/cactus", getCactus);
router.get("/limon", getLimon);
router.get("/zacate", getZacate);
router.get("/flores", getFlores);
router.get("/arbol", getArbol);
router.get("/mota", getMota);
router.get("/node/:id", getnodeByid);
router.delete("/node/:id", deleteNode);
router.put("/node/:id", updateNode);
router.post("/nodes", createNode);
module.exports = router;
