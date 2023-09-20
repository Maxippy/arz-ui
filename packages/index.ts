import aButton from './button/index'
import aInput from './input/index'
import aTextarea from './textarea/index'
import aSpace from './space/index'
import aSelect from './select/index'
import aRadio from './radio/index'
import aTree from './tree/index'
import aUpload from './upload/index'
import aMessage from './message/index'
import aDialog from './dialog/index'
import aTable from './table/index'
import aScrollTab from './scrollTab/index'
import aSkeleton from './skeleton/index'
import aIcon from './icon/index'
import { App } from 'vue'

const components = [
  aButton, 
  aInput, 
  aTextarea, 
  aSpace, 
  aSelect, 
  aRadio, 
  aTree, 
  aUpload, 
  aDialog, 
  aTable,
  aScrollTab,
  aSkeleton,
  aIcon
]
const install = (app: App) => {
  components.forEach(component => {
    app.use(component as any)
  })
  app.config.globalProperties.$message = aMessage
}

const AUI = {
  install
}
export { 
  aButton, 
  aInput, 
  aTextarea, 
  aSpace, 
  aSelect, 
  aRadio, 
  aTree, 
  aMessage,
  aUpload, 
  aDialog, 
  aTable,
  aScrollTab,
  aSkeleton,
  aIcon
}
export default AUI