//Here we put our ingredients
//we start by calling the mongoose manbouz
const mongoose = require("mongoose");
//jiblna schema w model ya walid
const { Schema, model } = mongoose;
//let's create our dataaaa
const noteschema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});
// we end by exporting them "goodbyyye :'( "
module.exports = noteModel = model("note", noteschema);
