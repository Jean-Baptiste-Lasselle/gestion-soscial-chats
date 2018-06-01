import Router from 'vue-router'
import './assets/css/global.css'

export default () => ({
  extendRootOptions: options => {
    options.head = {
      title: 'EGOIST CHAT'
    }
  },
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
