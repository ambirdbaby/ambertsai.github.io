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

// ------

i = 1;
function fnsubmit() {
  let odiv = document.getElementById("box");
  let oem = odiv.getElementsByTagName("em")[0];
  let otext = document.getElementById("text");
  let oli = odiv.getElementsByTagName("li");
  let add_li = document.createElement("li");
  let o_span = document.createElement("span");
  if (otext.value == "") {
    alert("Please fill out this field!");
    return;
  }
  oem.style.display = "none";
  o_span.style.position = "absolute";
  o_span.style.top = "-20px";
  o_span.style.right = "20px";
  o_span.style.background = "rgba(218, 165, 32, 0.6)";
  add_li.style.position = "relative";
  add_li.index = i;
  add_li.style.background = "rgba(218, 165, 32, 0.6)";
  add_li.style.marginBottom = "20px";
  let str = document.createTextNode(otext.value);
  let strspan = document.createTextNode("确定删除" + otext.value + "内容？");
  add_li.appendChild(o_span);
  o_span.style.display = "none";
  o_span.appendChild(strspan);
  add_li.appendChild(str);
  odiv.appendChild(add_li);
  i++;
  for (j = 0; j < oli.length; j++) {
    let m = j;
    oli[j].onmouseover = function () {
      this.style.background = "rgb(0, 255, 255)";
      this.childNodes(o_span).style.display = "block";
    };
    oli[j].onmouseout = function () {
      this.style.background = "rgba(218, 165, 32, 0.6)";
      this.childNodes(o_span).style.display = "none";
    };
    oli[j].onclick = function () {
      m--;
      odiv.removeChild(this);
      if (m < 0) {
        oem.style.display = "block";
      }
    };
  }
}
