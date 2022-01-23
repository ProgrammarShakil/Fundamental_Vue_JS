const app = Vue.createApp({
    data(){
        return{
         mobile: "",
         name:{
             firstName: "",
             lastName: ""
         }
        }
    },
    watch:{
        mobile(newValue, oldValue){
            console.log(newValue);
            if (isNaN(newValue)) {
                alert('Enter Valid Mobile Number')
                this.mobile = oldValue;  
            }
            if (this.mobile.length == 11) {
                alert('You already Entered 11 Digit')
                this.mobile = oldValue; 
            }
        },  // watch String value
        'name.firstName': function(newValue, oldValue){
            console.log(newValue);
        }, // watch Object value - Nested Property

        // 'name.lastName': function(newValue, oldValue){
            // console.log(newValue);
        // } // watch Object value -- Nested Property
    } 
})

app.mount('#app');
