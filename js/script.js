// ===== DOM LOADED =====
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
  if (noBtn) noBtn.addEventListener("click", () => window.location.href = "pageno.html");
  if (MPYES) MPYES.addEventListener("click", () => window.location.href = "pagetest.html");



  // ===== OVERLAY (QUESTION ANANAS) =====
  const overlay = document.getElementById("overlay");
  const yesBtn = document.getElementById("yesp");
  const remember = document.getElementById("rememberChoice");

  if (overlay) {

    if (localStorage.getItem("accepted") === "yes") {
      overlay.style.display = "none";
    } else {
      document.body.style.overflow = "hidden";
    }

    if (yesBtn) {
      yesBtn.addEventListener("click", function () {

        if (remember && remember.checked) {
          localStorage.setItem("accepted", "yes");
        }

        overlay.style.display = "none";
        document.body.style.overflow = "auto";

      });
    }

  }



  // ===== FORMULAIRE WEBHOOK DISCORD =====
  const form = document.getElementById("monFormulaire");

  if (form) {

    form.addEventListener("submit", function(e){

      e.preventDefault();

      let nomf = document.getElementById("nomf").value;
      let messagef = document.getElementById("messagef").value;
      let emailf = document.getElementById("emailf").value;

      fetch("https://discord.com/api/webhooks/1479382110023188557/j9syOeKRBrx3sAtqSXpWst4y0zZc2uiQOXgYt30xXoSYJ-JvzvtIuPj2Py3T0xRx8YIy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: "🍍 New Mighty Pineapple question",
          embeds: [{
            title: "New MP incoming?",
            color: 5814783,
            fields: [
              { name: "Name", value: nomf },
              { name: "Mail", "||" + value: emailf + "||"},
              { name: "Reason", value: messagef }
            ]
          }]
        })
      })
      .then(() => {

        alert("✅ Formulaire envoyé !");
        form.reset();

      })
      .catch(error => {

        console.error(error);
        alert("❌ Erreur lors de l'envoi");

      });

    });

  }

});



// ===== NOM UTILISATEUR =====
function afficherNom() {

  let nom = document.getElementById("username").value;

  if (nom === "") {
    alert("Incorrect");
    return;
  }

  localStorage.setItem("username", nom);
  window.location.href = "usernamepage.html";

}



// ===== AFFICHAGE DU NOM =====
let nomUtilisateur = localStorage.getItem("username");

const usernameElement = document.getElementById("usernamenv");

if (usernameElement) {
  usernameElement.textContent = nomUtilisateur;
}

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
