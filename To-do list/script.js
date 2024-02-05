let formButton = document.getElementById("buttonAdd");
let formOne = document.getElementById("form1");
let formTwo = document.getElementById("form2");
formCount = 0;
formButton.addEventListener("click", function (e) {
  if (e.target) {
    formCount++;
    formOne.style.display = "flex";
    formButton.innerText = "Add another form 🎯";
  }
  if (formCount === 2) {
    formTwo.style.display = "flex";
    formButton.style.display = "none";
  }
});
