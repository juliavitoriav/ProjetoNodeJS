const express = require("express");
const router = express.Router();
const cardapioController = require("../controllers/cardapioController");

router.get("/", cardapioController.list);
router.get("/show/:cardapioId/", cardapioController.show);
router.get("/create/", cardapioController.create);
router.post("/create/", cardapioController.create);
router.post("/:cardapioId/update", cardapioController.update);
router.get("/:cardapioId/update", cardapioController.update);
router.get("/:cardapioId/delete", cardapioController.delete);

module.exports = router;