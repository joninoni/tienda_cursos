const lista =document.querySelector("#lista");
const tbody= document.querySelector("#tbody");
const tabla =document.querySelector(".tabla");
let arreglo=[];

//eventos
listaEventos();
function listaEventos(){
    lista.addEventListener("click",agregarCurso);
    tabla.addEventListener("click",eliminarCurso);
}

//funciones
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("borrar-curso")){
       const id=e.target.getAttribute("data-id");
       arreglo=arreglo.filter( curso => curso.id !==id)
       crearHtml()
    }
}
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
    const existe = arreglo.some( curso => curso.id === objCurso.id);
    if(existe){
        const cursos = arreglo.map( curso => {
            if(curso.id === objCurso.id){
                curso.cantidad++
                return curso
            }
            else{
                return curso
            }
        })
        arreglo=[...cursos];
    }
    else{
        arreglo=[...arreglo,objCurso];
    }
    console.log(arreglo);
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
                      <td> <a href="#" class="borrar-curso" data-id=${curso.id}>X</a> </td>
                      `
        tbody.appendChild(tr);
    })
}

function limpiarHtml(){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}