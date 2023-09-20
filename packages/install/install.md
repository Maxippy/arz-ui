<script setup>

</script>

# 安装使用
### 安装
#### 推荐使用npm下载的方式安装

```
 npm install arz-ui 
```

### 使用arz-ui
需要注意的是css样式文件需要您单独引入
```
/*js*/
import { createApp } from 'vue';
import App from './App.vue';
import arzUi from 'arz-ui';
import '../node_modules/arz-ui/dist/style.css';

const app = createApp(App);
app.use(arzUi);
app.mount('#app');
```

### 现在可以开始使用啦
```
<a-button type="primary">arz按钮</a-button>
```

### 按需引入
当我们只需要引入一些组件的时候，可以按需引入

```
/*js*/
import { aButton, aInput } from 'arz-ui'
<a-button>按钮</a-button>
<a-input v-model="modelValue" placeholder="请输入"></a-input>
```

### 到这里就可以安心使用啦
