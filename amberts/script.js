const myText = document.getElementById("mytext");
const myBtn = document.querySelector(".mybtn");

function FsubmitBtn(value) {
  let str = "";
  let submitValue = myText.value;
  str = submitValue;
  alert("★ Thank you ★ Have fun；)");
  console.log(str);
}
myBtn.addEventListener("click", FsubmitBtn);
