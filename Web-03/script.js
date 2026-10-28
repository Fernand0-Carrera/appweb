function saludar(){
    const nombre= prompt("como te llamas");
    const mensaje= `Hola, ${nombre} Bienvenido al laboratorio de JS`;
    document.getElementById("resultado").innerText=mensaje;
}