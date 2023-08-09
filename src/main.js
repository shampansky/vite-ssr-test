import './assets/main.css'

import routes from './routes'
import App from './App.vue'
import viteSSR, { ClientOnly } from 'vite-ssr'

export default viteSSR(
    App,
    { routes },
    async ({ app, initialState }) => {
        app.component(ClientOnly.name, ClientOnly)
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        initialState.myData = await response.json()
    }
)
