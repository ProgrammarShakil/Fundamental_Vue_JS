const app = Vue.createApp({
    data(){
        return{
            a: 0,
            b: 0,
            salary: 10
        }
    },
    computed: {
      aToB(){
          console.log('a');
           return this.a + this.salary
       },
       bToB(){
           console.log('b');
           return this.b + this.salary
       }
    },
})

app.mount('#app');