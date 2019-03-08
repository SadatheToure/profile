$(document).ready(function() {
  alert("Mail-server connected!");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJFPeB4pMmnNVcUd9yN4vXvILa6oIxR9U",
    authDomain: "portfolio-site-315ec.firebaseapp.com",
    databaseURL: "https://portfolio-site-315ec.firebaseio.com",
    projectId: "portfolio-site-315ec",
    storageBucket: "portfolio-site-315ec.appspot.com",
    messagingSenderId: "158328799389"
  };
  firebase.initializeApp(config);

  let message = {
    fname: $("#fname").val(),
    lname: $("#lname").val(),
    email: $("#email").val(),
    subject: $("#subject").val(),
    messageBody: $("#message").val()
  };

  let ref = firebase.database().ref();
  $(".sendBtn").on("click", function() {
    ref
      .child("submissions")
      .push({
        name: "Sadathe",
        email: "email@gmail.com",
        message: "The message"
      })
      .then(function() {
        alert(" Success! ");
      });
  });
});

// id="fname "
// id="lname
//  id="email "
// <input type="text " id="subject " class="form-control " placeholder="Your subject of this message ">

// <textarea name="message " id="message " cols="30 " rows="10 " class="form-control " placeholder="Say something about us "></textarea>
