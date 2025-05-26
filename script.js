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

// EXO 3

const zone = document.querySelector("#zone");

zone.addEventListener("mouseover", function(e){
    zone.classList.add("lightBlue");
})

zone.addEventListener("mouseout", function(e){
    zone.classList.remove("lightBlue");
})

// EXO 4

const resultat = document.querySelector("#resultat");
const boutonCompter = document.querySelector("#compter");
const nombreClics = [];

boutonCompter.addEventListener("click", function(e) {
    nombreClics.push("");
    resultat.textContent = `Vous avez cliqué ${nombreClics.length} fois depuis le chargement de la page.`;
})

// EXO 5

const input = document.querySelector("#champNom");
const boutonAfficherNom = document.querySelector("#afficherNom");
const message = document.querySelector("#message");

boutonAfficherNom.addEventListener("click", function(e) {
    message.textContent = `Bonjour, ${input.value}`;
})

// EXO 6

const inputTexte = document.querySelector("#champTexte");
const boutonToggle = document.querySelector("#toggleChamp");

boutonToggle.addEventListener("click", function(e) {
    inputTexte.toggleAttribute("disabled");
})

// EXO 7

const boutonAjouter = document.querySelector("#ajouter");
const listeElements = document.querySelector("#listeElements");

boutonAjouter.addEventListener("click", function(e) {
    let listeElementsLi = document.createElement("li");
    listeElementsLi.textContent = "Nouvel élément ajouté";
    listeElements.append(listeElementsLi);
})

// EXO 8

texteCliquable = document.querySelectorAll(".cliquable");

for (let li of texteCliquable) {
    li.addEventListener("click", function(e) {
    li.remove();
})
}

// EXO 9

const champClavier = document.querySelector("#champClavier");
const messageClavier = document.querySelector("#messageClavier");

champClavier.addEventListener("keyup", function(e) {
    if (e.code === "Enter") {
        messageClavier.textContent = "Vous avez appuyé sur la touche Entrée."
    }
})