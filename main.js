let CardCon = document.querySelector(".lower");
let addCardTrigger = document.querySelector(".add-card");
let addCardInputCon = document.querySelector(".input");
let addCardInputText = document.querySelector(".input input");
let addCardClose = document.querySelector(".input-btns i");
let addCardBtn = document.querySelector(".input-btns button");





addCardTrigger.addEventListener("click", addCardTriggerFunc);
addCardClose.addEventListener("click", cancelCardAdding);
addCardBtn.addEventListener("click", addNote);





// Add Card Trigger
function addCardTriggerFunc(){
    addCardTrigger.style.display = "none";
    addCardInputCon.style.display = "block";
}
//Cancel Card Operation
function cancelCardAdding(){
    addCardTrigger.style.display = "block";
    addCardInputCon.style.display = "none";
}

// Add Note
function addNote(){
   if(addCardInputText.value !== ""){
    cancelCardAdding();
    let newNote = document.createElement("div");
    let textNode = document.createTextNode(addCardInputText.value);
    newNote.setAttribute("class","note");
    newNote.appendChild(textNode);
    CardCon.prepend(newNote);
    addCardInputText.value = "";
   }
}
