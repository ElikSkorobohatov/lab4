const addNote  = document.querySelector('.btn');
const moveNote = document.querySelector('.area');

addNote.addEventListener('click', function(){
    console.log('click')
})

moveNote.addEventListener('mouseup', function(){
    console.log('mouseup')
})

moveNote.addEventListener('mousedown', function(){
    console.log('mousedown')
})

