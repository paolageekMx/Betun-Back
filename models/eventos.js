const monggose = require ('mongoose');
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  nombre_evento:  String,
  fecha_cotizacion: Date,
  fecha_contrato: Date,
  fecha_evento:   Date,
  tipo_evento:    [{type:Schema.Types.ObjectId, ref:'tipos_Eventos'}],
  festejado: Array,
  croquis: String,
  maestro: String,
  actividades: [{type:Schema.Types.ObjectId, ref: 'actividades'}],
  paquete: [{type: Schema.Types.ObjectId, ref: 'paquetes'}],
  num_invitados: Number,
  lugar: String,
  presupuesto: Number, 
  proveedores: [{type: Schem. Types.ObjectId, ref: ''}]

})


const Evento = mongoose.model('Eventos', eventoSchema);

module.exports = Evento;