const quizzAnswerForm = document.querySelector(".quizzAnswerForm")
const submitAnswer = document.querySelector("#EnigSubmitBtnForm")
const resultPopupBox = document.querySelector("#EnigPopupBox__mainContainer")
const userAnswer = document.querySelector("#reponse")

quizzAnswerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    resultPopupBox.style.display = "flex"
    const userAnswerVal = userAnswer.value.toLowerCase()
    console.log(userAnswerVal)

})

//Tableau des résultats du quizz
const quizzResultTab = [
    {
        result: "Bravo !",
        comment: "Tu as trouvé la réponse. Es tu prêt pour l'énigme suivante ?"
    },
    {
        result: "Bravo !",
        comment: "Tu as trouvé la réponse. Es tu prêt pour l'énigme suivante ?"
    }
]