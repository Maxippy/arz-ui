import aScrollTab from './index.vue'
import { App } from 'vue'

aScrollTab.install = (app: App) => {
  app.component(aScrollTab.name, aScrollTab)
}

export default aScrollTab