const app = Vue.createApp({
    data() {
        return {
            listaCelulares: [],
            modelo: '',
            pantalla: '',
            carga: '',
            color: ''
        }
    },
    methods: {
        agregarCelular() {
            const celular = {
                Modelo: this.modelo,
                Pantalla: this.pantalla,
                Carga: this.carga,
                Color: this.color
            };
            this.modelo = '';
            this.pantalla = '';
            this.carga = '';
            this.color = '';
            this.listaCelulares.push(celular);
        }
    }
})

app.mount('#myCell')