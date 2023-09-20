import { createApp } from 'vue'
import App from './App.vue'
import AUI from '../packages/index'
import router from './router'
import hljs from 'highlight.js'
import { createPinia } from 'pinia'
import 'highlight.js/styles/color-brewer.css'
import './styles/app.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(AUI)
app.use(router)
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
})

app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block);
  });
});

app.mount('#app')

