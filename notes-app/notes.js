//localStorage.clear()---- clear localStorage..
const clearStorage = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    // localStorage.clear();
    alert("this is still on testing....still has some bugs...");
    noteSection.innerText = "";
})
//declear DOM Element..
const noteSection = document.getElementById("notes");
//Add event-input to the DOM
noteSection.addEventListener("input", ()=>{
    let newNote = noteSection.innerText;
    saveData()
})
//saving data to localStorage 
const saveData = ()=>{
    localStorage.setItem("notes", noteSection.innerText);
}
//getting sata from localStorage.
const showData = ()=>{
    noteSection.innerText = localStorage.getItem("notes");
}
showData();