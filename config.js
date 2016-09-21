var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config);

var preObj          = document.getElementById('object');
var listElement     = document.getElementById('list');
var dbRef           = firebase.database().ref().child( 'object' );
var hobbiesRef      = dbRef.child( 'hobbies' );
var txtEmail        = document.getElementById('txtEmail');
var txtPassword     = document.getElementById('txtPassword');
var btnLogin        = document.getElementById('btnLogin');
var btnSignup       = document.getElementById('btnSignup');
var btnLogout       = document.getElementById('btnLogout');
var btnUpload       = document.getElementById('uploader');
var progressBar     = document.getElementById('progress-bar');