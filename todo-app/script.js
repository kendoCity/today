
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-section");
//function that adds user input to ul element

//this function works if the enter key is press after a task is added
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        //function that checks if the input is empty and avoids empty li been added

        if (inputBox.value !== "") {
            // alert("You must write a task");
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        } 
        inputBox.value = "";
        saveData();
    }
})

//this function all work if the button is clicked
function addTask() {
    //function that checks if the input is empty and avoids empty li been added
    if (inputBox.value === "") {
        inputBox.style.background = "black";
        inputBox.style.color = "white";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.style.background = "none";
        inputBox.style.color = "black";
    }
    inputBox.value = "";
    saveData();
}

//function that deletes user task as desired
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
}, false)

//fonction thst saves the user data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//function that get the saved data and displays it to the user
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()