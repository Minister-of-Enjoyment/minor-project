// let htmlReciever = document.getElementById("receiverBox");
// let card = document.createElement("div");
// card.classList.add("card");

// let titleContainer = document.createElement("div");
// titleContainer.classList.add("card-title-container");
// titleContainer.innerHTML = "<h1>Card Title</h1>";

// let textContainer = document.createElement("div");
// textContainer.classList.add("card-body-container");
// textContainer.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
// nostrum optio blanditiis pariatur excepturi doloribus alias obcaecati
// iste tempora velit expedita tenetur eos, quasi porro in facilis
// adipisci</p>`;

// let ctaContainer = document.createElement("div");
// ctaContainer.classList.add("card-cta-container");
// let myBtn = (ctaContainer.innerHTML = `<button id="myBtn">Learn More</button>`);
// console.log(myBtn);

// let myBTN = document.getElementById("myBtn");
// myBTN.addEventListener("click", function () {
//   console.log("this button was clicked");
// });

// card.append(titleContainer, textContainer, ctaContainer);
// htmlReciever.append(card);

// let myBtn = document.getElementById("myBtn");
// myBtn.addEventListener("click", function (e) {
//   console.log(e);
// });

// ========= Form Assignment ===========
// ======= First Method =========
// let addButton = document.getElementById("buttonAdd");
// let input1 = document.getElementById("form1");
// let input2 = document.getElementById("form2");
// let clickRate = [2, 3];
// addButton.addEventListener("click", function (e) {
//   console.log(e);
//   clickRate.forEach(function (item, index) {
//     if (item === 2 && e.pointerId === 2) {
//       input1.style.display = "flex";
//       addButton.innerText = "Add another form";
//     } else if (item === 3 && e.pointerId === 3) {
//       input2.style.display = "flex";
//     }
//   });
// });

// ==========Seconf method =========
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
