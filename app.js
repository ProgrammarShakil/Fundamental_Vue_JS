var app = Vue.createApp({
    
    data() {
      return {}
    },

    methods: {
        getCurrentTime(){
            let ct = new Date();
            return ct;
        }
    }

  });
  
  app.mount("#app");