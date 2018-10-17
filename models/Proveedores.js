const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProvSchema = new Schema({
  nombre: [{type: mongoose.Schema.Types.ObjectId, ref: 'USer'}],
  descripcion:  String,
  servicios:    String,
  rfc:          String,
  ciudad:       String,
  telefono:     String,
  contacto:     String

});

const Proveedor = mongoose.model('Proveedores', provSchema);

module.exports = Proveedor;