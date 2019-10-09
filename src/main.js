// 入口文件
console.log('OK')
//导入vue
import Vue from 'vue'
//导入App根组件
import app from './App.vue'

//导入mui样式表
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 按需导入mint-ui组件中的Header
import { Header } from 'mint-ui';


Vue.component(Header.name, Header);


// 创建vue实例
var vue  = new Vue({
    el:'#app',
    render:c => c(app)
})