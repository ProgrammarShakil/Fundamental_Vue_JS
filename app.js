const app = Vue.createApp({
    data(){
        return{
           formData:{
               firstName: "",
               lastName: ""
           }
        }
    },
    methods: {
       getName(){
           console.log(this.formData);
       }
    },
})

app.mount('#app');