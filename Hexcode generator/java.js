const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.getElementById("executeGen");

let palette1 = document.getElementById("palletBoxOne");
let palette2 = document.getElementById("palletBoxTwo");
let palette3 = document.getElementById("palletBoxThree");

let code1 = document.getElementById("firstHexcode");
let code2 = document.getElementById("secondHexcode");
let code3 = document.getElementById("thirdtHexcode");

function randomHexNumber() {
  let randomCode = Math.floor(Math.random() * hexCode.length);
  return randomCode;
}

function randomHexcodeGenerator(palette, hextext) {
  button.addEventListener("click", function () {
    let hexcode = "#";
    for (let i = 0; i < 6; i++) {
      hexcode += hexCode[randomHexNumber()];
    }
    palette.style.backgroundColor = hexcode;
    hextext.innerText = hexcode;
  });
}
randomHexcodeGenerator(palette1, code1);
randomHexcodeGenerator(palette2, code2);
randomHexcodeGenerator(palette3, code3);
