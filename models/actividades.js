const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actSchema = new Schema({
nombre:       String,
descripcion:  String,
tipo_actividad: {type: String, enum:['Entregable', 'Pago', 'Cita', 'Tarea']}

});

const Actividad = mongoose.model('Actividades', actSchema);
module.exports = Actividad;