import { createApp } from 'vue' 
import App from './App.vue' //root component
import Store from './store/index'


const app = createApp(App)
app.use(Store) //use store
app.mount('#app')