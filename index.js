import Router from 'vue-router'
import './assets/css/global.css'

export default () => ({
  router: new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./views/index.vue')
      }
    ]
  })
})
