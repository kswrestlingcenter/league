import { createApp } from 'vue'
import { upperFirst } from 'lodash'
import { camelCase } from 'lodash'

import App from './app/App.vue'

import router from './router'

const app = createApp(App)

//auto-import base components, exposing them as global components
const requireComponent = require.context('./app/components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))

  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(router)

app.mount('#app')
