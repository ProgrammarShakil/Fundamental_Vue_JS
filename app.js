const app = Vue.createApp({
    data(){
        return{
           textColor : "red",
           background: "yellow"
        }
    },
    methods:{
        setClass(className){
            this.activeClass = className
        }
    }
})

app.mount('#app');
