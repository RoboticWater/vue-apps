import { createApp } from 'vue'
import App from './AppHello.vue'

let app = createApp(App).mount('#app')
app.$el.style.border = "solid 0.1em"