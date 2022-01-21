var app = Vue.createApp({

    data() {
      return {
        cars: ['shakil', 'karim', 'jabbar', 'rahim'],
        users:{
            name: 'shakil',
            age: 24,
            location: 'Dhaka'
        }
      }
    },

    methods: {

        increament(event, amount){
           this.count = this.count + amount;
           console.log(event)
        },

        decreament(amount){
            this.count = this.count - amount;
        },
        
        test(event){
            console.log(event)
        }
    }

  });
  
  app.mount("#app");