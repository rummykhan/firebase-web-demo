
if ( btnUpload ) {

    btnUpload.addEventListener('change', function( e ){
        // Get file
        var _file = e.target.files[0];

        // create a storage reference

        var _storage = firebase.storage().ref( 'files/'+_file.name) ;

        // Upload file
        var _task = _storage.put(_file);

        // show progres..
        _task.on('state_changed',

            function progress( snapshot ){
                var _percentage = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
                progressBar.style.width = +_percentage;
            },
            function error(err){

            },
            function complete(){

            }
        )

    });


}