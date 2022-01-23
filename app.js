const app = Vue.createApp({
    
    data(){
        return{
         name:{
             firstName: "",
             lastName: "",
             Fullname:''
         }
        }
    },

    watch:{
        'name.firstName' : function(newValue){
            this.name.Fullname =  newValue 
        },   // target data property name object and take value - and for show take show var as like "Fullname" and show it view file - take it "name.Fullname" as like in view file
        'name.lastName' : function(newValue){
            this.name.Fullname =  newValue 
        }   // target data property name object and take value - and for show take show var as like "Fullname" and show it view file - take it "name.Fullname" as like in view file
    },

    methods:{
        // show(){
        //     return this.name.firstName + " " + this.name.lastName;
        // }   just make a function and return - and call it view file with ()
    },

    computed:{
        // show(){
        //     return this.name.firstName + " " + this.name.lastName;
        // }    just make a function and return - and call it view file without ()
    }

})

app.mount('#app');
