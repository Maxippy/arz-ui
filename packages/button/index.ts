import aButton from './button.vue';
import { App } from 'vue'

aButton.install = (app: App) => {
  app.component(aButton.name, aButton)
}

export default aButton
