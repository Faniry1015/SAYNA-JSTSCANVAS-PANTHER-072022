//Effet de transition au défilement de tous les sections
const ratio = .25
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".reveal").forEach(function (r) {
    observer.observe(r)
})

//Animation de la barre latérale pour les logos réseaux sociaux
const socialLeftDiv = document.querySelector(".reseauxSoc")
socialLeftDiv.animate([
    { opacity: 0, transform: 'translateY(-300px)' },
    { opacity: 1, transform: 'translateY(0)' }
], {
    duration: 1500,
});

//Zoom sur les titres H1 et H2
let titleHtoScale = document.querySelectorAll("h2, h1")
titleHtoScale.forEach(title => {
    title.addEventListener("mouseover", () => {
        title.style.transform = "scale(1.1)"
    })
})
titleHtoScale.forEach(title => {
    title.addEventListener("mouseout", () => {
        title.style.transform = "none"
    })
})

