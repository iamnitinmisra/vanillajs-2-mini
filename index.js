function addToDo(event){
    // prevent default form function from urnning
    event.preventDefault();

    // create a new list item
    const item = document.createElement("li");

    // gab the value of the "item" input and set it equal to the text of the create list item
    item.innerText = document.getElementById("item").value;
    item.addEventListener("click", completeToDo);
    const button = document.createElement("button");
    button.innerText = "X";

    // add remove function to button to allow for list item to be deleted
    button.addEventListener("click", removeToDo);

    // add remove list item button
    item.appendChild(button);

    // select the ul that is holding all of our li's
    item.innerText=document.getElementById("item").value;


    const list = document.querySelector("ul");
    // add new item to the list with appendChild    
    list.appendChild(item);
    //clear out list item after successful form submission (UX)
    document.getElementById("item").value = "";
}

//select the form and run the add todo function when the form button is clicked
document.querySelector("form").addEventListener("submit", addToDo)

function removeToDo(event){
    event.target.parentNode.remove();
}

function completeToDo(event){
    const value = event.target.getAttribute("aria-checked")

    if(value !== 'true'){
        event.target.setAttribute('aria-checked', 'true')
    }else{
        event.target.setAttribute('aria-checked', 'false')
    }

}