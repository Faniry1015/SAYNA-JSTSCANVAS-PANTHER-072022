/**QUIZZ */
//Question, answer and did you know array (2 and 3)
const qTab = [ 
    {
        question: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        indice: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        reponse: "Le film debute a Oackland en Californie. Il s'agit de la ville dont est originaire Ryan Coogler et egalement la ville qui a vu naitre le mouvement politique des black panthers",
        doYouKnow:"Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? ",
    },
    {
        question: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        indice: "01001100 01000101 00100000 01010010 01001111 0100100<br>00100000 01001100 01001001 01001111 01001110 00001101<br>00001010",
        reponse: "Le roi lion",
        doYouKnow: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    }
]

/**Selector */
const quizzAnswerForm = document.querySelector(".quizzAnswerForm")
const submitAnswer = document.querySelector("#EnigSubmitBtnForm")
const resultPopupBox = document.querySelector("#EnigPopupBox__mainContainer")
const enigPopupBox__blur = document.querySelector(".EnigPopupBox__mainContainer")
const userAnswer = document.querySelector("#reponse")
let enigmeAnswer = "SI JE SUIS FIDELE C'EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS"
const congrat = document.querySelector(".congrat")
const resultComment = document.querySelector(".resultComment")

const nextQ = document.querySelector(".nextQ")
const comingFigCompte = document.querySelector(".comingFigCompte")

const q1h2 = document.querySelector("#sec2En__title__forTrans")
const q1dl = document.querySelector(".q1dl")


const qCurrentNumber = document.querySelector(".sec2En_currentDefNumber")
const currentQuestionSentence = document.querySelector(".currentQuestionSentence")
const currentIndice = document.querySelector(".currentIndice")
const doYouKnow = document.querySelector(".doYouKnow")
const indexPage = document.querySelector(".indexPage")

/**Submit answer */
quizzAnswerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    resultPopupBox.style.display = "flex"
    enigPopupBox__blur.style.display = "block"
    const specCarAr = [" ", '"', "."]
    let userAnswerVal = userAnswer.value
    let enigmeAnswerVal = enigmeAnswer
    for (car of specCarAr) {
        userAnswerVal = userAnswerVal.toUpperCase().replaceAll(car, "")
        enigmeAnswerVal = enigmeAnswerVal.toUpperCase().replaceAll(car, "")
    }
    console.log(userAnswerVal, enigmeAnswerVal)
    if(userAnswerVal === enigmeAnswerVal) {
        if(qIndex >= qTab.length) {
            congrat.innerText = "Ton initiation est terminée !"
            resultComment.remove()
            nextQ.style.display = "none"
            enigGoIndex.style.display = "block"
            comingFigCompte.style.display = "flex"
            return
        }
        congrat.innerText = "Bravo !"
        resultComment.innerText = "Tu as trouvé la réponse. Es tu prêt pour l'énigme suivante ?"
        nextQ.style.display = "block"
    } else {
        congrat.innerText = "Désolé !"
        resultComment.innerText = "Ce n'est pas tout à fait ça. N'abandonne pas !"
        nextQ.style.display = "none"
    }
})

/**Next question if true */
let qIndex = 0
let qNumber = 1
nextQ.addEventListener("click", (e) => {
    e.preventDefault()
    q1h2.style.display = "none"
    q1dl.style.display = "none"
    userAnswer.value =""
    ++qNumber
    qCurrentNumber.innerText = qNumber
    currentQuestionSentence.innerText = qTab[qIndex].question
    currentIndice.innerHTML = qTab[qIndex].indice
    doYouKnow.innerText = qTab[qIndex].doYouKnow
    enigmeAnswer = qTab[qIndex].reponse
    ++qIndex
})

/**Close quizz popupbox */
document.addEventListener("click",() => {
    resultPopupBox.style.display = "none"
    enigPopupBox__blur.style.display = "none"
} )

/**Back to index page at the end of the Quizz */
const enigGoIndex = document.querySelector("#enigGoIndex")
enigGoIndex.addEventListener("click",() => {
    indexPage.click()
} )

/**Count down at the end of the Quizz */
function reboursF() {
    const rebours = document.querySelector(".box-rebours")
    const jour = document.querySelector("#jour")
    const heure = document.querySelector("#heure")
    const minute = document.querySelector("#minute")
    const seconde = document.querySelector("#seconde")
    let today = new Date()
    const endDate = new Date("december 31, 2023 00:00:00")

    let total_secondes = (endDate - today) /1000

    if (total_secondes > 0) {
        let nb_jours = Math.floor((total_secondes) / (60*60*24))
        let nb_heures = Math.floor((total_secondes - (nb_jours * 60 * 60 * 24)) / (60 * 60));
                let nb_minutes = Math.floor((total_secondes - ((nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60))) / 60);
                let nb_secondes = Math.floor(total_secondes - ((nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60 + nb_minutes * 60)));
 
                jour.textContent = caractere(nb_jours);
                heure.textContent = caractere(nb_heures);
                minute.textContent = caractere(nb_minutes);
                seconde.textContent = caractere(nb_secondes);
    }

    let minuteur = setTimeout("reboursF();", 1000)

    function caractere(nb)
    {
        return (nb < 10) ? '0'+nb : nb
    }

}

reboursF()