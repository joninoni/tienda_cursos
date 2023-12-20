const lista =document.querySelector("#lista");
const tbody= document.querySelector("#tbody");
console.log(tbody);
let arreglo=[];

//eventos
lista.addEventListener("click",agregarCurso);


//funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("curso__carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerCurso(cursoSeleccionado);
    }
}
function leerCurso(curso){
    const objCurso={
        titulo:curso.querySelector("h2").textContent,
        img:curso.querySelector("img").src,
        id:curso.querySelector("a").getAttribute("data-id"),
        precio:curso.querySelector(".curso__precio").textContent,
    }
    arreglo=[...arreglo,objCurso];
}