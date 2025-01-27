let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// BACKEND FORM CODE
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwdKeSV14elPecdOxiMEFWlGGy5rDiCqQBiFOl71281MAHwNA4kHxsRtBI0KULtib_OUA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg= document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {msg.innerHTML="Message sent successfully!"
      setTimeout(function(){
        msg.innerHTML=""
      },4000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
