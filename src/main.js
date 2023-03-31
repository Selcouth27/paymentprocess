/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components

import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createStore } from 'vuex'
// Plugins
import { registerPlugins } from '@/plugins'

// import { VueRouter } from 'vue-router'

import {createRouter, createWebHistory}  from 'vue-router'


// 1. Define route components.
// These can be imported from other files
import Main from './views/DocumentStartUp.vue'
import DocumentsList from './views/DocumentList.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/login',name : 'Login', component: Main },
  { path: '/document',name : 'DocumentList', component: DocumentsList },
]
console.log(createRouter);
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
// const app = Vue.createApp({})


const store = createStore({
    state () {
      return {
        count: 0 ,
        documentList : null,
        user : { name : 'rj coquilla' , age : 24 , email : "asdasda@gmail.com" , contact : 20342349234}
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })


const app = createApp(App)


registerPlugins(app)

app.use(router)

app.use(store)

app.mount('#app')
