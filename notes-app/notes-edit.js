const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector ('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if(note === undefined){
    location.assign('/')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('change', function(e) {
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('change', function(e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeButton.addEventListener('click', function(e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', function(e) {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if(note === undefined){
            location.assign('/')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
    }
})