import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Index from './pages/Index.vue'
import Login from './pages/Login.vue'
import Dashboard from './pages/Dashboard.vue'
import Register from './pages/Register.vue'
import ResetPassword from './pages/ResetPassword.vue'
import CreateTask from './pages/CreateTask.vue'
import Motivator from "./pages/Motivator.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/reset-pwd',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/create-task',
            name: 'CreateTask',
            component: CreateTask
        },
        {
            path: '/motivator',
            name: 'Motivator',
            component: Motivator
        },
    ],
    history: createWebHistory()
})
createApp(App).use(createPinia()).use(router).mount('#app')
