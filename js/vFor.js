const estudiante = {
    nombre: 'Domenica',
    apellido: 'Vizcarra'
}
const arreglo = [
    {nombre: 'Domenica',apellido: 'Vizcarra'},
    {nombre: 'Alison',apellido: 'Vizcarra'},
    {nombre: 'Antony',apellido: 'Arguello'},
    {nombre: 'Juan',apellido: 'Jimenez'},
    {nombre: 'Josue',apellido: 'Masabanda'},
    {nombre: 'Fernando',apellido: 'Mosquera'},
    {nombre: 'Jessica',apellido: 'Yanez'},
    {nombre: 'Axel',apellido: 'Flores'},
    {nombre: 'Mike',apellido: 'Garcia'},
    {nombre: 'Paulo',apellido: 'Aldaz'}
]

console.log(arreglo)
const app = Vue.createApp({
    data(){
        return{
            miarreglo: arreglo,
            nombre:'Dome'
        }
    },
    methods:{
        agregarEstudiante(event){
            console.log('Vamos a agregar')
            const nuevoEstudiante={
                nombre:this.nombre
            }
            //push al final
            //unshift al principio
            this.miarreglo.unshift(nuevoEstudiante)
        },
        agregarApellido(event){
            console.log('Vamos a agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if (event.charCode=='13'){
                console.log('presiono enter')
                const nuevoEstudiante={
                    nombre:this.nombre,
                    apellido: 'Nuevo Apellido'
                }
                this.miarreglo.push(nuevoEstudiante)
            }else{
                console.log('no presiono enter')
            }
        }
    }

})

app.mount('#myApp2')

function insertarEstudiante(estudiante){

}
function insertarEstudiante(nombre,apellido){

}
