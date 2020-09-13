import { registerApplication, start } from 'single-spa'
registerApplication(
  // Name of our single-spa application
  '@local/vue-navigation',
  // loadingFunction
  () => import('./src/main.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/')
);
start();