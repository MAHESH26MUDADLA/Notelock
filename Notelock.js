

function addNote() {
    var noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() !== '') {
        var noteList = document.getElementById('noteList');
        var listItem = document.createElement('li');
        listItem.textContent = noteInput;
        noteList.appendChild(listItem);
        document.getElementById('noteInput').value = '';
    } else {
        alert('Please enter a note.');
    }
}

function addPassword() {
    var passwordInput = document.getElementById('passwordInput').value;
    if (passwordInput.trim() !== '') {
        var noteList = document.getElementById('noteList');
        var listItem = document.createElement('li');
        listItem.textContent = "Password: " + passwordInput;
        noteList.appendChild(listItem);
        document.getElementById('passwordInput').value = '';
    } else {
        alert('Please enter a password.');
    }
}
