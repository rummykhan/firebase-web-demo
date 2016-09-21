

dbRef.on('value', function(snapshot){
    preObj.innerText = JSON.stringify(snapshot.val(), null, 3);
});

hobbiesRef.on('child_added', function(snapshot){
    addChild(snapshot.key, snapshot.val());
});

hobbiesRef.on('child_removed', function(snapshot){
    var _listItem = document.getElementById( snapshot.key );
    _listItem.remove();
});

hobbiesRef.on('child_changed', function(snapshot){
    var _listItem = document.getElementById( snapshot.key );
    _listItem.innerText = snapshot.val();
});

function addChild(key, val)
{
    var _listItem = document.createElement('li');
    _listItem.innerText = val;
    _listItem.id = key;
    listElement.appendChild( _listItem );
}