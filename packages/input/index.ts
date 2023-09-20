import aInput from './input.vue'
import { App } from 'vue'

aInput.install = (app: App) => {
  app.component(aInput.name, aInput)
}

export default aInput