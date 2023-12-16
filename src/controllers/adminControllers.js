const productsModel = require('../models/productsModel');

const adminControllers ={
    
    admin: async (req, res) => {
        const products = await productsModel.getAll();

        res.render( "admin/admin", {
          view: {
            title: "Admin | Funkoshop"
          },
          items: products.data,
          enableGlide: true,
       
        });
      },
    
    create:(req, res) => {
        res.render( "admin/create", {
          view: {
            title: "Create | Funkoshop"
          },
       
        });
      },

     createNew: (req, res) => res.send("Route for admin create post"),
 

    edit:(req, res) => {
        res.render( "admin/edit", {
          view: {
            title: "Edit | Funkoshop"
          },
       
        });
      },
    edit: (req, res) => res.send("Route for edit ID put"),
    delete: (req, res) => res.send("Route for delete ID"),

}
module.exports = adminControllers;