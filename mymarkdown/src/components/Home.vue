<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Google アカウントでログイン </button>   
    <button @click="facebookLogin">Facebook アカウントでログイン </button>   
  </div>
 </template>
 <script>  export default {   
   name: 'home',   
   data () {
      return {
        msg:'Welcome to chat service'
   }
  },
  methods: {
  googleLogin: function() {
     firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  },
  facebookLogin: function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
 }
 }  
 </script>