const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const errorMsg = document.getElementById("errorMsg");

let notes = [];

const colors = ['#38bdf8','#a78bfa','#f472b6','#22d3ee','#facc15','#34d399'];

function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    noteCard.style.background = colors[Math.floor(Math.random() * colors.length)];
    noteCard.style.color = "#020617"; 

    const noteContent = document.createElement("div");
    noteContent.className = "note-content";
    noteContent.textContent = note;

    const actions = document.createElement("div");
    actions.className = "note-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editNote(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteNote(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    noteCard.appendChild(noteContent);
    noteCard.appendChild(actions);

    notesContainer.appendChild(noteCard);
  });
}

addBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  errorMsg.textContent = "";

  if (noteText === "") {
    errorMsg.textContent = "Note cannot be empty!";
    return;
  }

  notes.push(noteText);
  noteInput.value = "";
  renderNotes();
});

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function editNote(index) {
  const currentNote = notes[index];
  const newNote = prompt("Edit your note:", currentNote);

  if (newNote === null) return;
  if (newNote.trim() === "") {
    alert("Note cannot be empty!");
    return;
  }

  notes[index] = newNote.trim();
  renderNotes();
}

renderNotes();
