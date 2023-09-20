import aIcon from './index.vue';
import type { App } from 'vue'

aIcon.install = function (app: App) {
  app.component(aIcon.name, aIcon)
}

export * from './index.vue'

export default aIcon