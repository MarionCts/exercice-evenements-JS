// EXO 1

const button = document.querySelector("#monBouton");

button.addEventListener("click", function(e) {
    alert("Vous avez cliqué sur le bouton !");
})

// EXO 2

const paragraph = document.querySelector("#texte");

button.addEventListener("click", function(e) {
    paragraph.textContent = "Le texte a été modifié avec succès.";
})