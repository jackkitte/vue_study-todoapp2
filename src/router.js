import Vue from 'vue'
import Vuetify from 'vuetify';
import Router from 'vue-router'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: TodoList
    },
    {
      path: '/todos/add',
      component: TodoForm
    }
  ]
})
