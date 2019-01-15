const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const nodemailer = require('nodemailer');



mongoose
  .connect("mongodb://cesar1991:cesarr.-1324@test1-shard-00-00-ql0et.mongodb.net:27017,test1-shard-00-01-ql0et.mongodb.net:27017,test1-shard-00-02-ql0et.mongodb.net:27017/test?ssl=true&replicaSet=Test1-shard-0&authSource=admin&retryWrites=true")
  //.connect("mongodb://localhost/mevn-database")
  .then(db => console.log("DB is Connected"))
  .catch(err => console.error(err));

//Settings
//Tomar el puerto que nos da la nube o el 3000
app.set("port", process.env.PORT || 3000);
console.log("tengo puerto");
//Middlewares
app.use(morgan("dev"));
//este middleware viene con express, sirve para datos
app.use(express.json());
console.log("llegue a json");

//Routes
app.use("/api/tasks", require("./routes/tasks"));
console.log("llegue rutas");

//Static Files (archivos estaticos como fuentes, htmls, css, imagenes etc)
//__dirname me da la ruta de donde me encuentro
app.use('/',express.static('src/public'));
console.log("llegue dirname");

// Express Mail
app.use("/api/mail", require("./routes/mail"));
console.log("llegue mail");

//Servidor escuchando
app.listen(app.get("port"), () => {
  console.log("Servidor en " + app.get("port"));
});
