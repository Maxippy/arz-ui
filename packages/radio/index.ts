import aRadio from './index.vue'
import type { App } from 'vue'

aRadio.install = (app: App) => {
  app.component(aRadio.name, aRadio)
}

export default aRadio