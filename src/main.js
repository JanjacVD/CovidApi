import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router';
import './assets/main.css';
import axios from 'axios';
[]
export default {
    data: () => ({
        bannerLinks: []
    }),

    // Fetches posts when the component is created.
    created() {
        axios.get('/skills').then(Response => this.bannerLinks = Response.data);

    }
}


createApp(App).use(router).mount('#app')