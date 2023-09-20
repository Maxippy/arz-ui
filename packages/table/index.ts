import aTable from './index.vue'
import type { App } from 'vue'

aTable.install = (app: App) => {
  app.component(aTable.name, aTable)
}

export default aTable