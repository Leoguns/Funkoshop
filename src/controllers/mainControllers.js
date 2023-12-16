const productsModel = require("../models/productsModel");

const mainControllers = {
  home: async (req, res) => {
    const products = await productsModel.getAll();
    
  /*   let isLogged = false;

    if (req.session.user !== undefined) {
      isLogged = true;
     }  */

    res.render("home", {
      view: {
        title: "Home | Funkoshop",
        slider_titulo: "Últimos lanzamientos"
      },
      collections: products.data,
      //isLogged:isLogged

    });
  },

  contact: (req, res) =>{
    res.render("auth/contact", {
      view: {
        title: "Contact | Funkoshop",
      },
     
     });
  }, 
  about: (req, res) => res.send("Route for About View"),
  cart: (req, res) => {
    res.render("shop/cart", {
      view: {
        title: "Cart | Funkoshop",
      },
      
     });
  }
};

module.exports = mainControllers;
