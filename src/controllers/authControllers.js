const fs = require ("fs")
const usuarios = JSON.parse(fs.readFileSync('./src/data/usuarios.json', 'utf-8'));

const authControllers ={
    index: (req, res) => 
    {
        res.render( "auth/login", {
            view: {
              title: "Login | Funkoshop"
            },
         
          });
    }, login : (req, res) => {
     /* const credencial = {
      email:"leo@gmail.com",
      password:"admin123"
     }
       */
      const { email, password } = req.body;
      const usuarioEncontrado = usuarios.find(u => u.email === email && u.contrasena === password);
      
      
      //if (req.body.email == credencial.email && req.body.password ==credencial.password){

      // Verifica las credenciales (puedes agregar lógica de autenticación más compleja aquí)
     
      if (usuarioEncontrado) {
       req.session.usuario = email;
       //res.send('Inicio de sesión exitoso');
       res.redirect('/')
       res.end("login exitoso") 
       console.log("te has logueado")
      }else{
        res.end("Usuario invalido")
        res.status(401).send('Usuario o contraseña incorrectos');
      }
      
    },

    //login: (req, res) => res.send("Route for login View"),
    //login: (req, res) => res.send("Route for login post View"),
    register: (req, res) => res.send("Route for register View"),
    register: (req, res) => res.send("Route for register post View"),
    logout: (req, res) => res.send("Route for logout View"),
}
module.exports = authControllers;