// modelo representa una entidad libro y sus reglas basicas
const Libro = Backbone.Model.extend({
  default:{
    titulo:"",
    autor:"",
    Prestado:false,
    poseedor:null
  },

  //metodos
  validate: function(atributos){
    if(!atributos.titulo|| !atributos.titulo.trim()){
      return "El titulo es obligatorio";
    }
    if(!atributos.autor|| !atributos.autor.trim()){
      return "El autor es obligatorio";
    }
  },
  prestar:function(nombre){
    if(this.get("prestado")) return false;
    this.set({
      prestado:true, poseedor:nombre
    });
    return true;
  },

  devolver:function(){
    if(!this.get("prestado")) return false;
    this.set({
      prestado:false, poseedor:null    
    })
    return true;
  }
  // TODO: defaults, validate, prestar() y devolver().
});
