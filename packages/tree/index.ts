import aTree from './index.vue'
import type { App } from 'vue'

aTree.install = (app: App) => {
  app.component(aTree.name, aTree)
}

export default aTree