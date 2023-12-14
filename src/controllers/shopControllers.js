const productsModel = require('../models/productsModel');

const shopControllers = {
  shop: async (req, res) => {
    const products = await productsModel.getAll();
    res.render("shop/shop", {
      view: {
        title: "Shop | Funkoshop",
      },
      //items: funkosJSON,
      items: products.data,
      enableGlide: true,
    });
  },

  item: async (req, res) => //res.send("Route for add the current item to the item"),
  {

    const product_id = req.params.product_id;
    const jsonItem = await productsModel.getItem({product_id});
    const products = await productsModel.getAll();
    //const jsonItem = funkosJSON.filter(item => item.product_id === parseInt(product_id))

    res.render("shop/detail", {
        view: {
          title: "Detail | Funkoshop",
        },
        products: products.data,
        item: jsonItem.data,
        enableGlide: true,
      }); 

    


  }, 

  /*   itemAdd: (req, res) => res.send("Route for add the current item to the shop cart"),
  cart: (req, res) => res.send("Route for cart view"),
  cart: (req, res) => res.send("Route for get to checkout page"),
}; */

}//SHOPCONTROLLERS

module.exports = shopControllers;
