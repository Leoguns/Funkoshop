const productsModel = require("../models/productsModel");

/* const { clearCache } = require("ejs"); */
const fs = require ("fs")
const usuarios = JSON.parse(fs.readFileSync('./src/data/usuarios.json', 'utf-8'));

const authControllers ={
    index: (req, res) => 
    {
        res.render( "auth/login", {
            view: {
              title: "Login | Funkoshop"
            },
            nombre_usuario: ""           
          });
          
    }, login : async (req, res) => {
     /* const credencial = {email:"leo@gmail.com", password:"admin123"}*/

      const { email, password } = req.body;
      const usuarioEncontrado = usuarios.find(u => u.email === email && u.contrasena === password);
      console.log("usuarioEncontrado", usuarioEncontrado);
      
      //if (req.body.email == credencial.email && req.body.password ==credencial.password){

      // Verifica las credenciales (puedes agregar lógica de autenticación más compleja aquí)
     
      if (usuarioEncontrado) {
       req.session.usuario = usuarioEncontrado.email;
       //res.send('Inicio de sesión exitoso');
       const products = await productsModel.getAll();
           //res.redirect("/")
           res.render("home", {
             view: {
               title: "Home | Funkoshop",
             },
             collections: products.data,
             enableGlide: true,
             nombre_usuario: usuarioEncontrado.nombre
           }); 
       console.log("te has logueado")
      
      }else{
        res.end("Usuario invalido")
        res.status(401).send('Usuario o contraseña incorrectos');
      }
      
    },

   
    register: (req, res) => {res.render( "auth/register", {
      view: {
        title: "Register | Funkoshop"
      },
      nombre_usuario: ""           
    });
    
}, 
    registerUser: (req, res) =>{
      const nuevoUsuario = {
        nombre: req.body.name,
        apellido: req.body.lastname,
        email: req.body.email,
        usuario: req.body.email,
        contraseña: req.body.password,
        tipo: 'usuario_normal',

      };
      usuarios.push(nuevoUsuario);
      fs.writeFileSync('./src/data/usuarios.json', JSON.stringify(usuarios, null, 2), 'utf8');
      //res.send('Usuario registrado con éxito');
      res.redirect('/'),
      console.log("registrado correctamente")
    },
    
    logout: (req, res) => {
      req.session.destroy()
      res.redirect("/")
    }
    
    //res.send("Route for logout View"),
    //registerUser: (req, res) => res.send("Route for register post View"),
    //login: (req, res) => res.send("Route for login View"),
    //login: (req, res) => res.send("Route for login post View"),
    //res.send("Route for register View"),
}
module.exports = authControllers;