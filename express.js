import express from "express"

const app = express();

const tecnologias = ["react", "vue", "tailwind", "laravel", "express"];

const productos = [
    {id: 1, nombre: "Teclado Mecanico", precio: 4500},
    {id: 2, nombre: "Teclado Membrana", precio: 2500},
    {id: 3, nombre: "Mouse", precio: 3000},
    {id: 4, nombre: "Monitor", precio: 5000},
    {id: 5, nombre: "Procesador", precio: 4500},
    {id: 6, nombre: "Placa de Video", precio: 7500},
    {id: 7, nombre: "Fuente", precio: 4500},
    {id: 8, nombre: "RAM", precio: 3500},
    {id: 9, nombre: "Disco SSD", precio: 4700},
    {id: 10, nombre: "Disco Rigido", precio: 4500},
]

app.get("/", (req, res) => {
    res.send("Archilli Matias");
})

app.get("/materia", (req, res) => {
    res.send("Aplicaciones Hibridas - Materia dictada en el cuarto cuatrimestre de la carrera Disenio y Desarrollo Web de la Escuela de Arte Multimedial DaVinci");
})

app.get("/profesor", (req, res) => {
    res.send("Marcos Galban, Camila Belen profesora de la materia Aplicaciones Hibridas");
})

app.get("/stack/:nombre", (req, res) => {
    
    const nombreTecnologia = req.params.nombre;
    if (tecnologias.includes(nombreTecnologia.toLowerCase())) {
        res.send("Donde te dejo el CV?");
      } else {
        res.send("A leer la documentacion entonces...");
      }
})

app.get("/productos", (req, res) => {
    
    let {id} = req.query;
    if(!id){
        res.send(productos);
    }else{
        const productoEncontrado = productos.find(producto => producto.id == id);

        if (productoEncontrado) {
        res.send(productoEncontrado);
        } else {
        res.send("No se encontró ningún producto con el ID especificado.");
        }
    }
    
})

app.use((req, res, next) => {
    res.status(404).send('Error 404: Página no encontrada');
  });

app.listen(2023, () => {
    console.log("Server running on port 2023")
})