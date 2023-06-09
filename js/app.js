console.log("Componente Vue")
console.log(Vue)

//Options API
const app = Vue.createApp({
    //template:`
    //<h1>Hola Mundo</h1>
    //<p>Desde Vue.JS</>
    //<p>{{1+1}}</p>
    //`
    data(){
        return{
            nombre: 'Domenica',
            apellido: 'Vizcarra',
            mensaje: 'Hola mundo 2 desde Veu.JS'
        }
    },
    methods:{
        cambiarNombre(){
            console.log('Boton para cambiar nombre')
            this.nombre='Daniel'
        },
        cambiarApellido(){
            console.log('Boton para cambiar apellido')
            this.apellido='Teran'
        }
    }
})

app.mount('#myApp')