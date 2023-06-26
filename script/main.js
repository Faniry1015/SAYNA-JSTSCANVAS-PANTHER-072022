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
document.querySelectorAll(".reveal").forEach(function(r){
    observer.observe(r)
})

//Animation de la barre latérale pour les logos réseaux sociaux
const socialLeftDiv = document.querySelector(".reseauxSoc")
socialLeftDiv.animate([
    { transform: 'translateY(-300px)' },
    { transform: 'translateY(0)' }
  ], {
    duration: 1500,
  });