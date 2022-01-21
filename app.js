const app = Vue.createApp({
    data(){
        return{
            name: "Shakil"
        }
    },
    methods: {
        updateName(newName, event) {
           this.name = newName,
           console.log(event);
        },
        eventControl(event){
            // event.preventDefault();
            
            console.log("submitted form")
        }
    },
})

app.mount('#app');