var app = Vue.createApp({

    data() {
      return {
          count: 0
      }
    },

    methods: {

        increament(){
        this.count = this.count + 1;
        },

        decreament(){
            this.count = this.count - 1;
        }
    }

  });
  
  app.mount("#app");