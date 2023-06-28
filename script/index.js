//Message validator popup Box
const myForm = document.querySelector(".sec4FormSec__form")
const userName = document.querySelector("#userName")
const noName = document.querySelector(".noName")
const userMail = document.querySelector("#userMail")
const invalidMail = document.querySelector(".invalidMail")
const mainMessage = document.querySelector("#mainMessage")
const warningMessage = document.querySelector(".warningMessage")
const messagePopupBox = document.querySelector(".messagePopupBox")

myForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (userName.value === "") {
        noName.innerText = "Champ obligatoire: Entrez votre Nom !"
        noName.style.color = "red"
        return
    }else if (userMail.value === "") {
        noName.innerText = ""
        warningMessage.innerText = ""
        invalidMail.innerText = "Champ obligatoire: Entrez votre addresse mail !"
        invalidMail.style.color = "red"
        return
    } else if (mainMessage.value === "") {
        noName.innerText = ""
        invalidMail.innerText = ""
        warningMessage.innerText = "Champ obligatoire: Entrez votre message !"
        warningMessage.style.color = "red"
        return
    } else {
        noName.innerText = ""
        invalidMail.innerText = ""
        warningMessage.innerText = ""
    }
    messagePopupBox.style.display = "flex"
    document.mySendMessageForm.reset()
})

//Voir plus scroll vers Naissance d'un héros
const voirPlus = document.querySelector(".seeMore")
const voir = document.querySelector(".plus")

voirPlus.addEventListener("click", () => {
    voir.scrollIntoView({
        behavior: "smooth"
    })
})

