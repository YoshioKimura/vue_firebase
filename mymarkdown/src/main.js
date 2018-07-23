import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#appapp',
  render: h => h(App)
})

$('.popup-modal').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#username',
  modal: true
});

$(document).on('click', '.popup-modal-dismiss', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});
