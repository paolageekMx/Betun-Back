const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const paqSchema = new Schema({
  nombre:       String,
  descripcion:  String,
  precio:       Number,
  imagen:       String,

});

const Paquete = mongoose.model('Paquete', paqSchema);

module.exports = Paquete;