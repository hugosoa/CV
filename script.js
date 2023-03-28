const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

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
  console.log(firstBalise)

window.addEventListener("scroll", () => {                       //Change le chiffre de "changing-number" en fonction de % de vh scroller par le client

    if(window.pageYOffset > window.innerHeight * 0.50)
    {
        document.getElementById("changing-number").innerHTML = "02";
    }
    else
        document.getElementById("changing-number").innerHTML = "01";

    if (window.pageYOffset > window.innerHeight * 1.65)
    {
        document.getElementById("changing-number").innerHTML = "03";
    }

    if (window.pageYOffset > window.innerHeight * 2.25)
    {
        document.getElementById("changing-number").innerHTML = "04";
    }
    if (window.pageYOffset > window.innerHeight * 3.25)
    {
        document.getElementById("changing-number").innerHTML = "05";
    }
});