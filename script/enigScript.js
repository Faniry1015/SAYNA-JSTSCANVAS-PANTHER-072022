const quizzAnswerForm = document.querySelector(".quizzAnswerForm")
const submitAnswer = document.querySelector("#EnigSubmitBtnForm")
const resultPopupBox = document.querySelector("#EnigPopupBox__mainContainer")
const userAnswer = document.querySelector("#reponse")
let enigmeAnswer = "SI JE SUIS FIDELE C'EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS"
const congrat = document.querySelector(".congrat")
const resultComment = document.querySelector(".resultComment")

const nextQ = document.querySelector(".nextQ")
const enigGoIndex = document.querySelector("#enigGoIndex")

const q1h2 = document.querySelector("#sec2En__title__forTrans")
const q1dl = document.querySelector(".q1dl")


const qCurrentNumber = document.querySelector(".sec2En_currentDefNumber")
const currentQuestionSentence = document.querySelector(".currentQuestionSentence")
const currentIndice = document.querySelector(".currentIndice")
const doYouKnow = document.querySelector(".doYouKnow")

const indexPage = document.querySelector(".indexPage")

quizzAnswerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    resultPopupBox.style.display = "flex"
    const userAnswerVal = userAnswer.value.toUpperCase()
    console.log(userAnswerVal)
    if(userAnswerVal === enigmeAnswer) {
        if(qIndex >= qTab.length) {
            console.log("congrat")
            congrat.innerText = "Ton initiation est terminée !"
            resultComment.innerText = ""
            nextQ.style.display = "none"
            enigGoIndex.style.display = "block"
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

document.addEventListener("click",() => {
    resultPopupBox.style.display = "none"
} )


/**Revenir à la page principale à la fin du Quizz */
enigGoIndex.addEventListener("click",() => {
    indexPage.click()
} )

//Tableau des résultats du quizz
const qTab = [
    {
        question: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        indice: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        reponse: "",
        doYouKnow:"Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? ",
    },
    {
        question: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        indice: "01001100 01000101 00100000 01010010 01001111 0100100<br>00100000 01001100 01001001 01001111 01001110 00001101<br>00001010",
        reponse: "",
        doYouKnow: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    }
]

