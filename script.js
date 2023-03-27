const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}

window.onscroll = function(){
    window.addEventListener("scroll", () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let positionHauteur = document.documentElement.clientHeight;

        let barre = (position / hauteur) * positionHauteur;

        document.getElementById("barre").style.height = barre + "px";
    });
}