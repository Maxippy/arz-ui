import { createVNode, render } from 'vue'
import aMessage from './index.vue'
import type { IMessageProps } from './index.vue'

interface IMessageParams extends IMessageProps {
  duration?: number
}

export default (params: IMessageParams) => {
  // 动态创建一个DOM容器
  const div: HTMLElement = document.createElement('div')
  div.setAttribute('class', 'a-message-container')
  if (typeof document !== 'undefined') {
    document.body.appendChild(div)
  }
  let timer: any = null
  // 传递给组件的选项
  const vnode = createVNode(aMessage, { 
    type: params.type, 
    message: params.message, 
    duration: params.duration,
    icon: params.icon,
    textColor: params.textColor,
    bgColor: params.bgColor,
    customClass: params.customClass
  }, [params.message])
  render(vnode, div)
  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
    if (typeof document !== 'undefined') {
      document.body.removeChild(div)
    }
    clearTimeout(timer)
  }, params.duration || 2500)
}