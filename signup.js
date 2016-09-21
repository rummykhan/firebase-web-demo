

btnSignup.addEventListener('click', function(){
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(function(err){
        console.log('Exception while signup');
    });
});