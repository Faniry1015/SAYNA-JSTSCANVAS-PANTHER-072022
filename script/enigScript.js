const quizzAnswerForm = document.querySelector(".quizzAnswerForm")
const submitAnswer = document.querySelector("#EnigSubmitBtnForm")
const resultPopupBox = document.querySelector("#EnigPopupBox__mainContainer")
const userAnswer = document.querySelector("#reponse")

quizzAnswerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    resultPopupBox.style.display = "block"
    const userAnswerVal = userAnswer.value.toLowerCase()
    console.log(userAnswerVal)

})