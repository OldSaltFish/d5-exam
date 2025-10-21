import { createApp } from 'vue'
// 引入 unocss 样式
import 'virtual:uno.css'
// 重置样式
import '@unocss/reset/tailwind-compat.css'
// TDesign 样式引入
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'

createApp(App).mount('#app')
