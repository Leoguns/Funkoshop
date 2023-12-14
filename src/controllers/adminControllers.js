const adminControllers ={
    admin: (req, res) => res.send("Route for admin View"),
    create: (req, res) => res.send("Route for admin create View"),
    create: (req, res) => res.send("Route for admin create post"),
    edit: (req, res) => res.send("Route for edit ID"),
    edit: (req, res) => res.send("Route for edit ID put"),
    delete: (req, res) => res.send("Route for delete ID"),

}
module.exports = adminControllers;