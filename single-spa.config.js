import { registerApplication, start } from 'single-spa'

registerApplication(
  'menu',
  () => import('./src/VueJs-Micro-Front-End-Menu/menu.app.js'),
  () => location.pathname === '/menu' ? false : true
)

registerApplication(
  'pages',
  () => import('./src/VueJs-Micro-Front-End-Pages/pages.app.js'),
  () => location.pathname === '/pages' ? false : true
)

start()