var app = Vue.createApp({

    data() {
      return {
          count: 0
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