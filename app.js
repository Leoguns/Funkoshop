const express = require ("express");
const path = require ("path")
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require("uuid");

const port = 4000

const app = express();

const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");
const { notFoundPage } = require('./src/utils/errorHandlers');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: uuidv4() /* 'mi-secreto' */, 
    resave: false, 
    saveUninitialized: false 
}));

// middleware to make 'user' available to all templates
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  })


app.set ("view engine", "ejs")
app.set ("views",path.join(__dirname,"/src/views"))

app.use (express.static(path.join(__dirname,"public")))

app.use("/", mainRoutes);
app.use ("/shop", shopRoutes);

app.use ("/admin", adminRoutes);
app.use ("/auth", authRoutes);

app.use(notFoundPage);

app.listen (port,()=>{
    console.log(`Servidor para Concesionarias OK en el puerto ${port}`);
})
