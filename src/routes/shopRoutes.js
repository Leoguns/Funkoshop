const express = require ("express");
const shopControllers = require("../controllers/shopControllers");
const router = express.Router();

router.get("/", shopControllers.shop);
router.get("/item/:product_id", shopControllers.item);
//router.post("/item/:id/add", shopControllers.itemAdd);
//router.get("/cart", shopControllers.cart);
//router.post("/cart", shopControllers.cart);

module.exports = router;