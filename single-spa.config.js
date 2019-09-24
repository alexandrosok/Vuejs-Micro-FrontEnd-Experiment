import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue',
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === '/react' ? false : true
)

registerApplication(
  'menu',
  () => import('./src/menu/menu.app.js'),
  () => location.pathname === '/menu' ? false : true
)

registerApplication(
  'pages',
  () => import('./src/pages/pages.app.js'),
  () => location.pathname === '/pages' ? false : true
)

start()