var app = Vue.createApp({
    data() {
      return {
        msg: "Hello World",
        man: {
            name: "shakil",
            age: "25"
        }
      };
    }
  });
  
  app.mount("#app");