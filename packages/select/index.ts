import aSelect from './index.vue'
import type { App } from 'vue'

aSelect.install = (app: App) => {
  app.component(aSelect.name, aSelect)
}

export default aSelect