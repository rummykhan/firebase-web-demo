

btnLogin.onclick =  function() {

    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(function(err){
        console.log(err);
    });
};

btnLogout.addEventListener('click', function(e){
    
    firebase.auth().signOut();

});
