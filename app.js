var app = Vue.createApp({

    data() {
      return {
          count: 0
      }
    },

    methods: {

        increament(amount){
           this.count = this.count + amount;
        },

        decreament(amount){
            this.count = this.count - amount;
        }
    }

  });
  
  app.mount("#app");