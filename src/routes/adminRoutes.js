const express = require ("express");
const adminControllers = require("../controllers/adminControllers");
const router = express.Router();

router.get("/", adminControllers.admin);
router.get("/create", adminControllers.create);
router.post("/create", adminControllers.create);
router.get("/edit/:id", adminControllers.edit);
router.put("/edit/:id", adminControllers.edit);
router.delete("/delete/:id", adminControllers.delete);

module.exports = router;