const lista =document.querySelector("#lista");
const tbody= document.querySelector("#tbody");
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
        cantidad:1,
    }
    arreglo=[...arreglo,objCurso];
    crearHtml();
}

function crearHtml(){

    limpiarHtml();

    arreglo.forEach( curso => {
        const tr =document.createElement("tr");
        tr.innerHTML=`<td><img src="${curso.img}"></td>
                      <td> ${curso.titulo}</td>
                      <td> ${curso.precio}</td>
                      <td> ${curso.cantidad}</td>
                      `
        tbody.appendChild(tr);
    })
}

function limpiarHtml(){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}