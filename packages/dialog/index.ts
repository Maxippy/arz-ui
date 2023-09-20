import aDialog from './index.vue'
import type { App } from 'vue'

aDialog.install = (app: App) => {
  app.component(aDialog.name, aDialog)
}

export default aDialog