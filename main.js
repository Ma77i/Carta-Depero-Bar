class Producto {
    constructor ({id, name, platos}) {
        this.id = id,
        this.name = name,
        this.platos = platos
    }

    renderElemento() {
    let contenedor = document.createElement('div');
    
    contenedor.innerHTML =  `<h2>${this.name}</h2>
                            <div class='cajas'>
                                <p class='one'>Nombre</p>
                                <p class='two'>Precio</p>
                                <p class='three'>Descripcion</p>
                            </div>`
    return contenedor
    }
}


fetch('/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Work with JSON data here
        console.log(data);
        for (const item of data) {
            datos.push(new Producto(item))
        }
    })
    .catch(err => {
        // Do something for an error here
    });
    
    const seccionComida = document.getElementById('comida');
    const seccionBebida = document.getElementById('bebida');
    const datos = []
    console.log(datos)
    
    
    
    
datos.forEach(element => {
    seccionComida.appendChild(element.renderElemento())
});