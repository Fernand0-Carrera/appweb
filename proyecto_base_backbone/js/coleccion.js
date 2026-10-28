// PASO 4 (minutos 23-30): Colección Backbone.
// Una colección organiza VARIOS modelos del tipo Libro.
// COLECCION: administra un conjunto de libros
const Biblioteca = Backbone.Collection.extend({
  model: Libro
});
