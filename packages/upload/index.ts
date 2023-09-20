import aUpload from './index.vue'
import type { App } from 'vue'

aUpload.install = (app: App) => {
  app.component(aUpload.name, aUpload)
}

export default aUpload