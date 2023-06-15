const app = Vue.createApp({
    data() {
        return {
            consola:" ",
            resultado:"Resultado: "
        }
    },
    methods: {
        agregarNumero(numero){
            this.consola +=numero;
        },
        agregarOperacion(operacion){
            this.consola +=operacion;
        },
        calcularResultado(){
            let total=eval(this.consola);
            this.resultado="Resultado: "+total;
        },
        limpiar(){
            this.consola=" ";
            this.resultado="Resultado: ";
        }
    }
})

app.mount('#miCalculadora')