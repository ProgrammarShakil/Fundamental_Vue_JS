const app = Vue.createApp({
    data(){
        return{
          skills:[
              {name:'html', experience: 5},
              {name:'css', experience: 3},
              {name:'js', experience: 6}
            ],
          newSkill: {} // we can also use sting here - as like  /-/ newSkill: "" /-/
        }
    },
    methods:{
        addSkill(){
            this.skills.push({name:this.newSkill, experience: 2 }); 
            // we can also push sting here - as like  /-/ this.newSkill: "" /-/
            this.newSkill = {}
        },
        removeSkill(item){
            this.skills.splice(item, 1) 
            // splice will remove index - here will remove current index 
            // - take parameter as like item to use splice
        }
    }
})

app.mount('#app');
