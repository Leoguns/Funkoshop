const express = require ("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers")

router.get("/", mainControllers.home);
router.get("/contact", mainControllers.contact);
router.get("/about", mainControllers.about);
router.get("/cart", mainControllers.cart);

module.exports = router;