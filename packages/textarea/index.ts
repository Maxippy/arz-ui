import aTextarea from './index.vue'
import { App } from 'vue'

aTextarea.install = (app: App) => {
  app.component(aTextarea.name, aTextarea)
}

export default aTextarea