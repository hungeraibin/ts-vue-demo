import Vue from 'vue';
import Bin from './Bin.vue'

let div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

new Vue({
  el: div,
  render: h => h(Bin),
})