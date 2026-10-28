//Integracion
/*
conectar html, coleccion, vistas y los eventos*/ 

//datos
const biblioteca= new Biblioteca([
    {titulo: "juego de tronos", autor:"george R R martin"},
    {titulo: "Clean code", autor:"robert c martin"},
    {titulo: "refactoring", autor:"martin fowler"}
]);

const vistas=[];

function actualizarResumen(){
    const prestados=biblioteca.where({prestado:true}).length;
    $("#total").text(biblioteca.length);
    $("#prestado").text(prestados);
    $("#disponible").text(biblioteca.length-prestados);
}


function renderizarLista(){
    //limpiar todo
    vistas.forEach(vista => vista.remove());
    vistas.length=0;

    $("#lista-libros").empty();
    if(biblioteca.length===0){
        $("#lista-libros").append(
            $("<p>").addClass("vacio").text("no existen libros registrados")
        );
    }
    biblioteca.each(libro =>{
        const vista=new LibroView({model: libro, collection: biblioteca});
        vistas.push(vista);
        $("#lista-libros").append(vista.render().el);

    });

    actualizarResumen();
}

renderizarLista();
window.bibliotecaEPN=biblioteca;
