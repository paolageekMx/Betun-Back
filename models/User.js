

const mongoose =  require ('mongoose');
const Schema =    mongoose.Schema;

const userSchema = new Schema({
  username:   String,
  password:   String,
  nombre:     String,
  ap_paterno: String,
  ap_materno: String,
  mail:       String,
  rol:        {type:String, enum:['admin', 'proveedor', 'organizador', 'festejado']},
  plantillas: [{type:mongoose.Schema.Types.ObjectId, ref:'Plantillas'}]
})

const User = mongoose.model('User', userSchema);


module.exports = User;