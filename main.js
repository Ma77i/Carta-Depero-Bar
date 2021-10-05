fetch('/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Work with JSON data here
        console.log(data);
        for (const item of data) {
            datos.push(new Object(item))
            seccionComida.appendChild(item.renderElemento())
        }
    })
    .catch(err => {
    // Do something for an error here
    });

const seccionComida = document.getElementById('comida');
const seccionBebida = document.getElementById('bebida');
const datos = []
console.log(datos)

renderElemento = () => {
    let contenedor = document.createElement('div');
    
    contenedor.innerHTML =  `<h2></h2>
                            <div class='cajas'>
                                <p class='one'>${data.name}</p>
                                <p class='two'>Precio</p>
                                <p class='three'>Descripcion</p>
                            </div>`
    return contenedor
}

datos.forEach(element => {
    
});