// Ouvrir la superposition modale lorsqu'on clique sur le lien "Sing in"
document.querySelector(".singin").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

// Fermer la superposition modale lorsqu'on clique sur le bouton de fermeture
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Fermer la superposition modale lorsqu'on clique en dehors de celle-ci
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
