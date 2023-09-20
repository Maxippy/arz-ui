import aSkeleton from './index.vue';
import type { App } from 'vue'

aSkeleton.install = (app: App) => {
  app.component(aSkeleton.name, aSkeleton)
}

export default aSkeleton