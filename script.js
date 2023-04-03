const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

const homeButton = document.querySelector(".accueilButton")
const expeButton = document.querySelector(".parcoursButton")
const skillButton = document.querySelector(".skillButton")
const moreButton = document.querySelector(".moreButton")
const portfolioButton = document.querySelector(".portfolioButton")

homeButton.addEventListener("click", toggleNav)                 //pour enlever le menu lors du click sur un lien
expeButton.addEventListener("click", toggleNav)
skillButton.addEventListener("click", toggleNav)
homeButton.addEventListener("click", toggleNav)
moreButton.addEventListener("click", toggleNav)
portfolioButton.addEventListener("click", toggleNav)

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){                                           //^^^^^^^^^^ajoute la fonction active aux elements de navigation^^^^^^^^^^^^^^^^^^^^^^^^^^
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}                                                           

window.onscroll = function(){                                   //progression de la barre au scroll du client et une formule qui prend le % scroller
    window.addEventListener("scroll", () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let positionHauteur = document.documentElement.clientHeight;

        let barre = (position / hauteur) * positionHauteur;

        document.getElementById("barre").style.height = barre + "px";
    });
}


const loader = document.querySelector('#loaders');
const desac = document.querySelector('.loader')

window.addEventListener('load', () => {                         //ajoute et enleve des class pour le bon fonctionnement du loader
    loader.classList.add('fondu-out'),
    desac.classList.remove('loader'),
    loader.classList.remove('loader-container');
    document.body.classList.remove("no-scroll")
})




function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  const firstBalise = document.querySelector("#form-dipl").getBoundingClientRect().top;
  const secondBalise = document.querySelector("#skill").getBoundingClientRect().top;
  const thirthBalise = document.querySelector("#portfolio").getBoundingClientRect().top;
  const fourthBalise = document.querySelector("form").getBoundingClientRect().top;
  

window.addEventListener("scroll", () => {                       //Change le chiffre de "changing-number" en fonction du nombre de pixel scroll par le client
   
    if(window.pageYOffset > 0 && window.pageYOffset < 500)
        document.getElementById("changing-number").innerHTML = "01";

    if(window.pageYOffset > firstBalise - 300)
    {
        document.getElementById("changing-number").innerHTML = "02";
    }

    if(window.pageYOffset > secondBalise - 300 && window.pageYOffset > firstBalise)
    {
        document.getElementById("changing-number").innerHTML = "03";
    }
    
    if(window.pageYOffset > thirthBalise - 300 && window.pageYOffset > secondBalise)
    {
        document.getElementById("changing-number").innerHTML = "04";
    }
    
    if(window.pageYOffset > fourthBalise - 500 && window.pageYOffset > thirthBalise)
    {
        document.getElementById("changing-number").innerHTML = "05";
    }
});
