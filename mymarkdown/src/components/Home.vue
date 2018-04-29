<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Google アカウントでログイン </button>   
  </div>
 </template>
 <script>  export default {   
   name: 'home',   
   data () {
      return {
   }
  },
  methods: {
  googleLogin: function() {
     firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
 }
 }  
 </script>