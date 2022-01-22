const app = Vue.createApp({
    data(){
        return{
            value: "1st"
        }
    },
    template:`<p style="color:red"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel necessitatibus quisquam eum laborum, quasi accusamus perferendis nihil cupiditate fuga ipsam aliquid, similique, consequuntur quod repellendus sed tempore vero molestias?</p>`
   
})

app.mount('#app');
