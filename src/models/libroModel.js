const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
  userName: String,
  edad : Number
},{ collection: 'usuarios' })

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);
const Usuario = mongoose.model('Usuario', UserSchema);

module.exports = Libro, Usuario;