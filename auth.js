
firebase.auth().onAuthStateChanged(function(firebaseUser){

    if(firebaseUser){
        console.log(firebaseUser);
        if(btnLogout) btnLogout.classList.remove('hidden');
    }else{
        if(btnLogout) btnLogout.classList.add('hidden');
        console.log('User not logged in');
    }

});