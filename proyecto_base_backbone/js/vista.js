// PASO 5 (minutos 30-45): Vista Backbone.
// Debe representar un libro y responder a los clics del usuario.
// VISTA: representa un libro y maneja clics y obtiene los cambios (eventos)
const LibroView = Backbone.View.extend({
  tagName: "article",
  className:"libros",

  events:{
    "click .btn-prestar": "alternarPrestamo",
    "click .btn-eliminar": "eliminar",
  },

  //inicializar
  initialize: function(){
    this.listenTo(this.model,"change", this.render);
  },
  //renderizar
  render:function(){
    this.$el.empty();
    const datos=$("<div>");
    $("<h3>").text(this.model.get("titulo")).appendTo(datos);
    $("<p>").text("Autor: "+ this.model.get("autor")).appendTo(datos);

    const prestado=this.model.get("prestado");
    $("<span>")
      .addClass("insignia"+(prestado ? " prestado ":" "))
      .text(prestado ? " Prestado a "+this.model.get("poseedor"):"Disponible")
      .appendTo(datos);

    const acciones=$("<div>").addClass("acciones");
      $("<button>", {type: "button", class: "boton boton-secundario btn-prestar"})
      .text(prestado ? "Devolver":"Prestar")
      .appendTo(acciones);

    $("<button>",{type:"button", class:"boton boton-peligro btn-eliminar"})
      .text("eliminar")
      .appendTo(acciones);

    this.$el.append(datos,acciones);
    return this;

  },

  alternarPrestamo:function(){
    if(this.model.get("prestado")){
      this.model.devolver();
    }else{
      this.model.prestar("Estudiante EPN");
    }
  },
  eliminar:function(){
    this.collection.remove(this.model);
  }
});
