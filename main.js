let lists = document.querySelectorAll(".lists .list");

lists.forEach((list) => {
  let upper = list.querySelector(".upper");
  let lower = list.querySelector(".lower");
  let cardsCon = list.querySelector(".cards");
  let addCardTrigger = list.querySelector(".add-card");
  let addCardInputCon = list.querySelector(".input");
  let addCardInputText = list.querySelector(".input input");
  let addCardBtn = list.querySelector(".input-btns button");
  let addCardClose = list.querySelector(".input-btns i");
  let counter = list.querySelector(".counter");
  let collapse = list.querySelector(".collapse");

  let inputFlag = "";

  //Show Input
  function showInput() {
    addCardTrigger.classList.add("hide");
    addCardInputCon.classList.remove("hide");
    inputFlag = "shown";
    addCardInputText.focus();
  }
  // Hide input
  function hideInput() {
    addCardTrigger.classList.remove("hide");
    addCardInputCon.classList.add("hide");
    inputFlag = "hidden";
  }

  // Add Note + Counter
  function addNote() {
    if (addCardInputText.value !== "") {
      hideInput();

      let newNote = document.createElement("div");
      let textNode = document.createTextNode(addCardInputText.value);

      newNote.setAttribute("class", "card");
      newNote.appendChild(textNode);
      cardsCon.appendChild(newNote);

      counter.innerHTML = +counter.innerHTML + 1;
      addCardInputText.value = "";
    } else {
      hideInput();
    }
  }

  // toggle Rotate
  function toggleRotate() {
    // list styles
    upper.classList.toggle("margin-toggle");
    //  Cards Container
    cardsCon.classList.toggle("hide");
    // input + trigger logic
    if(!addCardInputCon.classList.contains("hide")){
        addCardInputCon.classList.toggle("hide");
    }else{
        addCardTrigger.classList.toggle("hide");

    }
  }

  addCardTrigger.addEventListener("click", showInput);
  addCardClose.addEventListener("click", hideInput);
  addCardBtn.addEventListener("click", addNote);
  collapse.addEventListener("click", toggleRotate);
});

// let list = document.querySelector(".list");
// let upper = document.querySelector(".list .upper");
// let CardCon = document.querySelector(".cards");
// let addCardTriggers = document.querySelectorAll(".lower .add-card");
// let addCardInputCon = document.querySelector(".input");
// let addCardInputText = document.querySelector(".input input");
// let addCardClose = document.querySelector(".input-btns i");
// let addCardBtn = document.querySelector(".input-btns button");
// let counter = document.querySelector(".counter");
// let collapse = document.querySelector(".collapse");

// let boardData;
// let listData;
// let cardsData = [];
