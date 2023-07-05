//Fade in on scroll pages
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

//Animate left social media logo
const socialLeftDiv = document.querySelector(".reseauxSoc")
socialLeftDiv.animate([
    { opacity: 0, transform: 'translateY(-300px)' },
    { opacity: 1, transform: 'translateY(0)' }
], {
    duration: 1500,
});

//Zoom on H1 and H2 titles
let titleHtoScale = document.querySelectorAll("h2, h1, .sec3PrincAs__as__fig__imgCont__img, .sec3PrincAs__as__botfig, .allActorsImgWakanda  ")
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

/**Img following mouse */
document.onmousemove = suitsouris;

function suitsouris(evenement) {
  if (navigator.appName == "Microsoft Internet Explorer") {
    var x = event.x + document.body.scrollLeft;
    var y = event.y + document.body.scrollTop;
  } else {
    var x = evenement.pageX;
    var y = evenement.pageY;
  }
  document.getElementById("mouseImg").style.left = (x + 1) + 'px';
  document.getElementById("mouseImg").style.top = (y + 1) + 'px';
}