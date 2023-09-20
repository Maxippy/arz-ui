import tSpace from './index.vue'
import type { App } from 'vue'
tSpace.install = (app: App) => {
  app.component(tSpace.name, tSpace)
}

export default tSpace