const carrito = document.getElementById('carrito');
const curso = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListeners();

function cargarEventListeners(){
    curso.addEventListener('click',comprarCurso);


    //cuando se elimine curso del carrito

    carrito.addEventListener('click',eliminarCurso);


    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);

    //mostrar local stora

    document.addEventListener('DOMContentLoaded', leerLocalStorage)
}



function comprarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);

    }



}
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
   insertarCarrito(infoCurso);

}
//muestra el curso seleccionado en el carrito

function  insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `   
    <td>
    <img src="${curso.imagen}" width=100>

    </td>
    <td> ${curso.titulo}  </td>
    <td> ${curso.precio}  </td>
    <td>
    <a href="#" class="borrar-curso" data-id="${curso.id}" >X
    </a>
         
    </td>


    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

function eliminarCurso(e){
    e.preventDefault();

    let curso,cursoId
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso=e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');

    }

    eliminarCursoLacalStorage(cursoId);
        



}


function vaciarCarrito(){
    //listaCursos.innerHTML='';


    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
   
    //vaciar localStorage

    vaciarLocalStorage();
    
    return false;
}


//almacena cursos en el carrito
function guardarCursoLocalStorage(curso){
    let cursos;
cursos=obtenerCursosLocalStorage();
cursos.push(curso);

localStorage.setItem('cursos',JSON.stringify(cursos) );
}



function obtenerCursosLocalStorage(){
    let cursosLS;

    if (localStorage.getItem('cursos')===null ) {
        cursosLS=[];

    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));

    }
    return cursosLS;
}

// imprime los cursos de local storage en el carrito

function leerLocalStorage(){
    let cursosLS;

    cursosLS=obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso){
        const row = document.createElement('tr');
        row.innerHTML = `   
        <td>
        <img src="${curso.imagen}" width=100>
    
        </td>
        <td> ${curso.titulo}  </td>
        <td> ${curso.precio}  </td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}" >X
        </a>
             
        </td>
    
    
        `;
        listaCursos.appendChild(row);

        } );


    } 
    function eliminarCursoLacalStorage(curso){
        let cursosLS;
        cursosLS=obtenerCursosLocalStorage();
        cursosLS.forEach(function(cursoLS, index){
            if (cursoLS.id ===curso) {
                cursosLS.splice(index,1);
            }
        });

        localStorage.setItem('cursos',JSON.stringify(cursosLS));
    }


    //elimina todos los cursos de localStorage
    function vaciarLocalStorage(){
        localStorage.clear();

    }