const mongoose = require("mongoose");
const { Schema } = mongoose;

const Tasks = new Schema({
  email: String,
  title: String,
  description: String
});

//Definir y exportar con nombre y el esquema a exportar
module.exports = mongoose.model("Tasks", Tasks);
