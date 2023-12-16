const express = require ("express");
const adminControllers = require("../controllers/adminControllers");
const router = express.Router();

router.get("/admin", adminControllers.admin);
router.get("/create", adminControllers.create);
router.post("/create", adminControllers.createNew);
router.get("/edit/:id", adminControllers.edit);
router.put("/edit/:id", adminControllers.edit);
router.delete("/delete/:id", adminControllers.delete);

module.exports = router;