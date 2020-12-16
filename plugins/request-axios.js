import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$H=(url)=>axios.get(url)