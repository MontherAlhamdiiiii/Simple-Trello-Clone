let lists = document.querySelectorAll(".lists .list");

lists.forEach((list) => {
  let upper = list.querySelector(".upper");
  let lower = list.querySelector(".lower");
  let cardsCon = list.querySelector(".cards");
  let addCardTrigger = list.querySelector(".add-card");
  let addCardInputCon = list.querySelector(".lower .input");
  let addCardInputText = list.querySelector(".lower .input input");
  let addCardBtn = list.querySelector(" .lower .input-btns button");
  let addCardClose = list.querySelector(".lower .input-btns i");
  let counter = list.querySelector(".counter");
  let collapse = list.querySelector(".collapse");

  let cards = cardsCon.querySelectorAll(".card");

  cardsCon.addEventListener("click", handleCardClick);
  cardsCon.addEventListener("click", handleDelete);

  function handleDelete(e){
      const deleteIcon = e.target.closest(".delete");
      if (!deleteIcon) return;
      const card = deleteIcon.closest(".card");
      counter.innerHTML = +counter.innerHTML - 1;
      card.remove();
  }

  function handleCardClick(e) {
    const mark = e.target.closest(".mark");
    if (!mark) return;

    const card = mark.closest(".card");
    const text = card.querySelector(".text");

    const icons = mark.querySelectorAll("i");
    
    const deleteIcon = card.querySelector(".delete");
    
    const isUnchecked = !icons[0].classList.contains("hide");

    if (isUnchecked) {
      icons[0].classList.add("hide");
      icons[1].classList.remove("hide");
      deleteIcon.classList.remove("hide");
      text.classList.add("text-spacing");
    } else {
      icons[1].classList.add("hide");
      icons[0].classList.remove("hide");
      deleteIcon.classList.add("hide");
      text.classList.remove("text-spacing");
    }
  }

  //Show Input
  function showInput() {
    lists.forEach((list) => {
      let inputCon = list.querySelector(".input");
      inputCon.classList.add("hide");
      let addCT = list.querySelector(".add-card");
      addCT.classList.remove("hide");
    });
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
      let newMark = document.createElement("div");
      let textNode = document.createElement("div");

      newNote.setAttribute("class", "card");
      newMark.setAttribute("class", "mark");
      textNode.setAttribute("class", "text");

      let circle = document.createElement("i");
      let circleChecked = document.createElement("i");
      let deleteIcon = document.createElement("i");

      circle.className = "fa-regular fa-circle no-check";
      circleChecked.className = "fa-solid fa-circle-check hide check";
      deleteIcon.className = "fa-solid fa-xmark hide delete";

      newMark.appendChild(circle);
      newMark.appendChild(circleChecked);

      textNode.textContent = addCardInputText.value;

      newNote.appendChild(newMark);
      newNote.appendChild(textNode);
      newNote.appendChild(deleteIcon);
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
    if (!addCardInputCon.classList.contains("hide")) {
      addCardInputCon.classList.toggle("hide");
    } else {
      addCardTrigger.classList.toggle("hide");
    }
  }

  addCardTrigger.addEventListener("click", showInput);
  addCardClose.addEventListener("click", hideInput);
  addCardBtn.addEventListener("click", addNote);
  collapse.addEventListener("click", toggleRotate);
});



