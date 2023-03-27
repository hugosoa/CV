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


const loader = document.querySelector('#loaders');
const desac = document.querySelector('.loader')

window.addEventListener('load', () => {
    loader.classList.add('fondu-out'),
    desac.classList.remove('loader'),
    loader.classList.remove('loader-container');
})
function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }

// window.addEventListener("scroll", () => {
//     console.log(window.scrollY)
//     if(window.scrollY > 600 && window.scrollY < 1800)
//     {
//         document.getElementById("changing-number").innerHTML = "02";
//         console.log("scroll ok");
//     }
//     else if(window.scrollY >= 1800 && window.scrollY < 2800)
//     {
//         document.getElementById("changing-number").innerHTML = "03";
//     }
//     else if (window.scrollY >= 2800 && window.scrollY < 3300)
//     {
//         document.getElementById("changing-number").innerHTML = "04";

//     }   
//     else if (window.scrollY >= 3300)
//     {
//         document.getElementById("changing-number").innerHTML = "05";
//     }
//     else {
//         document.getElementById("changing-number").innerHTML = "01";

//     }
// });

window.addEventListener("scroll", () => {

    if(window.pageYOffset > window.innerHeight * 0.50)
    {
        document.getElementById("changing-number").innerHTML = "02";
    }
    else
        document.getElementById("changing-number").innerHTML = "01";

    if (window.pageYOffset > window.innerHeight * 1.50)
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