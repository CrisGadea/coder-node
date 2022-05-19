class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName = () => {
        return this.nombre + " " + this.apellido;
    }

    addMascota = (mascota) => {
        this.mascotas.push(mascota);
    }

    countMascotas = () => {
        return this.mascotas.length;
    }

    addBook = ({nombre, autor}) => {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBookNames = () => {
        const nombreLibros = [];
        this.libros.forEach(libro => {
            nombreLibros.push(libro.nombre);
        });
        return nombreLibros;
    }

}


const listaLibros = [
    {
        nombre: "El Alquimista",
        autor: "Paulo Cohelo"
    },
    {
        nombre: "La brújula dorada",
        autor: "Paulo Cohelo"
    }
];

const listaMascotas = ["perro", "gato"];



const usuario1 = new Usuario("Cristian", "Gadea", listaLibros, listaMascotas);

const mascotaNueva = "loro";
const libroNuevo = {
    nombre: "Viaje al centro de la Tierra",
    autor: "Julio Verne"
};

usuario1.addMascota(mascotaNueva);
usuario1.addBook(libroNuevo);

console.log(`
    Cantidad de mascotas:  ${usuario1.countMascotas()},
    Nombre completo: ${usuario1.getFullName()}
    Nombre de los libros: ${usuario1.getBookNames()}
`); 