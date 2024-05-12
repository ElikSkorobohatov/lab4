const addNote  = document.querySelector('.btn');
const moveNote = document.querySelector('.area');
const closeNote = document.querySelector('.close');

let notes = [];


function notesRenderer(notesList) {
    let template = '';
    notesList.forEach(function (note, index) {
        template += '<div class="block">'+
                        '<div class="up">'+
                            '<h3>Title</h3>'+
                            '<a class="close">X</a>'+
                        '</div>'+
                        '<div class="general">'+
                            '<p>Тут може бути Ваша реклама! :)</p>'+
                        '</div>'+
                    '</div>';
    });
    moveNote.innerHTML = template;
    console.log(notes);
}

function notesRemove(notesList) {
    let template = '';
    notesList.forEach(function (note, index) {
        template -= '<div class="block">'+
                        '<div class="up">'+
                            '<h3>Title</h3>'+
                            '<a class="close">X</a>'+
                        '</div>'+
                        '<div class="general">'+
                            '<p>Тут може бути Ваша реклама! :)</p>'+
                        '</div>'+
                    '</div>';
    });
    moveNote.innerHTML = template;
    console.log(notes);
}

addNote.addEventListener('click', function(){
    notes.push({
        coords: {
            x: 0,
            y: 0
        },
        text: ''
    });
    notesRenderer(notes);
});

moveNote.addEventListener('mouseup', function(){
    console.log('mouseup')
})

moveNote.addEventListener('mousedown', function(){
    console.log('mousedown')
})

moveNote.addEventListener('mousemove', function(){
    console.log('mousemove')
})

closeNote.addEventListener('click', function(){
    notesRemove(notes);
})