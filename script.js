const bulle = document.querySelector("#bulle");
const bulle1 = document.querySelector("#bulle1");
const bulle2 = document.querySelector("#bulle2");
const bulle3 = document.querySelector("#bulle3");

window.addEventListener('scroll', () => {
    const vh = window.innerHeight;
    const scrolled = window.scrollTop;
    console.log(vh);
    console.log(scrolled);
    if (scrolled > vh) {
        bulle1.classList.add('active')
    }
}, {once: true})