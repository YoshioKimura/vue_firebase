<template>
 <div id="appapp">
  <Home v-if="!isLogin"></Home>
  <Editor v-if="isLogin" :user="userData"></Editor>
   <Admin v-if="isLogin == true && userData.displayName == 'Haya Kimu'"></admin>

</div>
 </template>
 <script>
 import Home from './components/Home.vue';  
 import Editor from './components/Editor.vue';
 import Admin from './components/Admin.vue';

 export default {   
   name: 'app',   
   data() {
  return {
    isLogin:false,
    userData:null,
  }
},
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isLogin = true; 
          this.userData = user;
        } else {
          this.isLogin = false;
           this.userData = null; 
        };
    });
  },
  components:{   
    'Home': Home,   
    'Editor': Editor,
    'Admin': Admin,
    },
}
 </script>
 

<style lang="scss">
#appapp {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
