<template>
  <div id="admin" class="popup-modal" @click="modal">
      われわれアドミンである
  </div>
  
 </template>
 <script>  
 
 export default {   
   name: 'admin',   
   data () {
      return {
        msg:'Welcome to Admin'
   }
  },
  methods: {
    modal:function(){

      }
  }
 }  
 </script>