const app = Vue.createApp({
    data(){
        return{
            name: "Shakil"
        }
    },
    methods: {
        update() {
            setTimeout(()=>{
                this.name = "Suvo"
            }, 2000)
        },
    },
})

app.mount('#app');