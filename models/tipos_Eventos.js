const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiposSchema = new Schema({
  nombre: String,
  descripcion: String
})

const tipoEvento = mongoose.model('tipos_eventos',tiposSchema )

module.exports = tipoEvento;