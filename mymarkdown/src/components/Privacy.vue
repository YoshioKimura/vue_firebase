<template>
  <div id="home">
    <h1>{{ msg }}</h1>


 <h2>個人情報の利用目的 </h2>

当サービスでは、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。

これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。

 

 <h2>個人情報の第三者への開示</h2>

当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。

・本人のご了解がある場合

・法令等への協力のため、開示が必要となる場合

 

 <h2>個人情報の開示、訂正、追加、削除、利用停止</h2>

ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。

 

 <h2>アクセス解析ツールについて</h2>

当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。

このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。

 

 <h2>広告の配信について</h2>

[自分のサイトの名前]は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。

第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにクッキーを設定したりこれを認識したりする場合があります。

 

 <h2>免責事項</h2>

当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。

当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。

当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。

 

 <h2>プライバシーポリシーの変更について</h2>

当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。

修正された最新のプライバシーポリシーは常に本ページにて開示されます。


  </div>
 </template>
 <script>  export default {   
   name: 'home',   
   data () {
      return {
        msg:'Welcome to call'
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