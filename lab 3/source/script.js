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
    // HINT🤩 

    let a = document.createElement('a'); //<a>
    a.setAttribute("href", "#"); //link zonder destinatie
    a.setAttribute("class", "remove");
    a.innerHTML = "Remove";
    newNote.appendChild(a);
    a.addEventListener('click', this.remove.bind(newNote));
    a.addEventListener('click', this.removeFromStorage.bind(newNote));
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
    let saveN = JSON.parse(localStorage.getItem("notes"));
    
    notes.push(this.title);
    localStorage.setItem("notes",JSON.stringify(notes));

    console.log(localStorage);
    
    /*let a = 0;
    let notes = [];
  
    if(localStorage.length >= 1) {

      notes = JSON.parse(localStorage.getItem("notes"));
     a = JSON.parse(localStorage.getItem("notes").length);

    }

    notes[a]= this.title;
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(localStorage);
    */
  }

  remove() {// HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  this.style.display = "none";
  let removed = this.querySelector("a").previousSibling.innerHTML;
  console.log(removed);
  console.log (localStorage);
  }

  removeFromStorage(){
    this.style.display = "none";
    let removed = this.querySelector("a").previousSibling.innerHTML;

    let storedNotes = JSON.parse(localStorage.getItem("notes"));

    storedNotes = storedNotes.filter(array => array != null);
    //Nulls filteren

    for(let i = storedNotes.length-1; i>=0; i--){ //hekken post
      if (storedNotes[i] === removed){
        storedNotes.splice(i,1);
      }
    }

    console.log(storedNotes);

    localStorage.setItem("notes",JSON.stringify(storedNotes));
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!"); // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work

    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));

    document.querySelector('#txtAddNote').addEventListener("keydown", q => {
      if(q.keyCode == 13){
        this.createNote();
      }
    })

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
localStorage.clear();