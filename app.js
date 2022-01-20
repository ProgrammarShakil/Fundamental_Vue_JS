var app = Vue.createApp({
    data() {
      return {
        msg: "Hello World",
        man: {
            name: "shakil",
            link: "https://freelancershakil913.blogspot.com",
            htmlCode: "<a href='https://freelancershakil913.blogspot.com'>Linking here</a>"
        }
      };
    }
  });
  
  app.mount("#app");