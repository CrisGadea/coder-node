class Contador {

    static contadorGlobal = 0;

    constructor(nombre){
        this.contador = 0;
        this.nombre = nombre;
    }


    obtenerResponsable = () => this.nombre;

    obtenerCuentaIndividual = () => this.contador;

    obtenerCuentaGlobal = () => Contador.contadorGlobal;
    

    contar = () => {
        this.contador++;
        this.contadorGlobal += this.contador;
    }


}