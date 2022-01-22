

const app = Vue.createApp({
    data(){
        return{
            number:'',
            result: ''
        }
    },
    methods:{
        
        // handleInput(event){
        //     console.log(event);
        //     this.number = event.target.value;
        // },               No Need to call - If i use v-model 

        getDouble(){
            this.result = this.number * 2
        },
        getSquare(){
            this.result = this.number * this.number
        },
        reset(){
            this.number = "",
            this.result = ""
        }
    }
})

app.mount('#app');
