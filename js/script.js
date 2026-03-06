document.addEventListener("DOMContentLoaded", function () {

  // ===== BOUTONS MENU =====
  const bouton1 = document.getElementById("monBouton");
  const bouton2 = document.getElementById("monBouton2");
  const bouton3 = document.getElementById("monBoutontest");
  const bouton4 = document.getElementById("monBoutonBacktomenu");
  const bouton5 = document.getElementById("gallery");
  const logo = document.getElementById("logoBtn");
  const noBtn = document.getElementById("nop");
  const MPYES = document.getElementById("MPYES");

  if (bouton1) bouton1.addEventListener("click", () => window.location.href = "page.html");
  if (bouton2) bouton2.addEventListener("click", () => window.location.href = "pageno.html");
  if (bouton3) bouton3.addEventListener("click", () => window.location.href = "icedodo.html");
  if (bouton4) bouton4.addEventListener("click", () => window.location.href = "index.html");
  if (bouton5) bouton5.addEventListener("click", () => window.location.href = "pineapple_gallery.html");
  if (logo) logo.addEventListener("click", () => window.location.href = "index.html");
  if (noBtn) noBtn.addEventListener("click", () => window.location.href = "pageno.html")
  if (MPYES) MPYES.addEventListener("click", () => window.location.href = "pagetest.html")

//truc un peu comme les cookie du début : 
const overlay = document.getElementById("overlay");
const yesBtn = document.getElementById("yesp");
const remember = document.getElementById("rememberChoice");

if (localStorage.getItem("accepted") === "yes") {
  overlay.style.display = "none";
} else {
  document.body.style.overflow = "hidden";
}

yesBtn.addEventListener("click", function () {

  if (remember.checked) {
    localStorage.setItem("accepted", "yes");
  }

  overlay.style.display = "none";       // ferme la fenêtre
  document.body.style.overflow = "auto"; // réactive le scroll
});
});



// ===== NOM UTILISATEUR =====
function afficherNom() {
  let nom = document.getElementById("username").value;
   if (nom === "") {
    alert("Incorrect")
    return; // on arrête la fonction
   }
  localStorage.setItem("username", nom);
  window.location.href = "usernamepage.html";
} 
 // variable du nom d'utlilisateur
let nomUtilisateur = localStorage.getItem("username");

document.getElementById("usernamenv").textContent = nomUtilisateur;

if (nomUtilisateur === "Ananas_Smurf") {
  alert("Hi pineapple overlord !");
}



// ===== CHEATCODE =====
function fCHEATCODE() {
  let ccode = document.getElementById("code").value;

    if (ccode !== "#pineapple16") {
    alert("Incorrect");
    return;
  } else {
    alert("Correct code");
    localStorage.setItem("code", ccode);
  }

}
let nomCode = localStorage.getItem("code");
// tru c webhook : 
document.getElementById("formulaire").addEventListener("submit", function(e){
  alert("WORK");
  e.preventDefault();

  let nomf = document.getElementById("nomf").value;
  let messagef = document.getElementById("messagef").value;
  let emailf = document.getElementById("emailf").value;

fetch("https://discord.com/api/webhooks/1479382110023188557/j9syOeKRBrx3sAtqSXpWst4y0zZc2uiQOXgYt30xXoSYJ-JvzvtIuPj2Py3T0xRx8YIy", {
    method : "POST",
    mode: "no-cors"
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "New Mighty Pineapple question",
      embeds: [{
        title: "New MP incoming?",
        color: 5814783,
        fields: [
          { name: "Nom", value: nomf },
          { name: "Email", value: emailf },
          { name: "Message", value: messagef }
        ]
      }]
      })
    })
  });
});
