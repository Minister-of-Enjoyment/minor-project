let icon = document.getElementById("faIcon");
let flyBox = document.querySelectorAll(".flyInMenu");
let buttonDot = document.querySelectorAll(".fa-solid");

buttonDot.forEach(function (clicks, index) {
  let menu = flyBox[index];

  clicks.addEventListener("click", function () {
    if (menu.classList.contains("flyInMenu")) {
      menu.classList.remove("flyInMenu");
      menu.classList.add("flyInMenuNew");
    } else if (menu.classList.contains("flyInMenuNew")) {
      menu.classList.remove("flyInMenuNew");
      menu.classList.add("flyInMenu");
    }
  });
});

// // Adding a click event to each buttons
// buttonDot.forEach(function (button) {
//   button.addEventListener("click", showFlyInMenu);

//   // create a function to show the fly in menu
//   function showFlyInMenu() {
//     if (flyInMenu.classList.contains("flyInMenu")) {
//       flyInMenu.classList.remove("flyInMenu");
//       flyInMenu.classList.add("flyInMenuNew");
//     } else if (flyInMenu.classList.contains("flyInMenuNew")) {
//       flyInMenu.classList.remove("flyInMenuNew");
//       flyInMenu.classList.add("flyInMenu");
//     }
//   }
// });

// icon.addEventListener("click", function () {
//   console.log(icon);
//   // check if the fly in menu has the first class that hides visivility
//   if (flyInMenu.classList.contains("flyInMenu")) {
//     flyInMenu.classList.remove("flyInMenu");
//     flyInMenu.classList.add("flyInMenuNew");
//   } else if (flyInMenu.classList.contains("flyInMenuNew")) {
//     flyInMenu.classList.remove("flyInMenuNew");
//     flyInMenu.classList.add("flyInMenu");
//   }
// });
