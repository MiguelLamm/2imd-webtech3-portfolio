class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div'); //<div>

    newNote.setAttribute("class", "card"); //class card

    let newP = document.createElement("p"); // <p>

    newP.innerHTML = title;
    newNote.appendChild(newP); //p in de div zetten
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    // HINT🤩
    document.querySelector(".notes").appendChild(this.element); // this function should append the note to the screen somehow
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let notes = [];
    let a = 0;
    if(localStorage.length > 0) {
      notes = JSON.parse(localStorage.getItem("notes"));
     a = JSON.parse(localStorage.getItem("notes").length);
    }

    notes[a]= this.title;
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(localStorage);
    
  }

  remove() {// HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

  }

}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!"); // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work

    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {// HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice

    let notesStored = JSON.parse(localStorage.getItem("notes"));

    //array filteren op Null
    let notesFiltered = notesStored.filter(array => array != null);

    if (notesFiltered != null){
      console.log(notesFiltered);

      notesFiltered.forEach( loadNote => {
        let loadNew = new Note(loadNote);
        loadNew.add(loadNew.element);
      });
    
    }
    else{
    console.log("er ging iets mis met loaden")
    }
    
  }
  

  createNote(e) {
    // this function should create a new note by using the Note() class
    // HINT🤩
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    note.add();
    note.saveToStorage();
    this.reset();
  }

  reset() {// this function should reset the form 
    document.getElementById('txtAddNote').value="";
  }

}

let app = new App();
//localStorage.clear();