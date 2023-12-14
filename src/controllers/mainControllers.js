const productsModel = require("../models/productsModel");

const mainControllers = {
  home: async (req, res) => {
    const products = await productsModel.getAll();
    if (req.session.usario){
      res.sendFile(__dirname + '/views/home.ejs', { usuario: req.session.usuario });
    }
    res.render("home", {
      view: {
        title: "Home | Funkoshop",
      },
      collections: products.data,
      enableGlide: true,
    });
  },

  contact: (req, res) =>{
    res.render("auth/contact", {
      view: {
        title: "Contact | Funkoshop",
      },
     });
  }, //res.send("Route for Contact View"),
  about: (req, res) => res.send("Route for About View"),
  cart: (req, res) => {
    res.render("shop/cart", {
      view: {
        title: "Cart | Funkoshop",
      },
     });
  }//res.send("Route for Faqs View"),
};

module.exports = mainControllers;
