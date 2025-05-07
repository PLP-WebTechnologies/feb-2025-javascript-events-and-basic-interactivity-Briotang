const ButtonElement =document.getElementById("changeBttn");

ButtonElement.addEventListener("click", function() {
    const ParagraphElement = document.getElementById("bttn");

    if (ParagraphElement.style.color == "red"){
        ParagraphElement.style.color = "black"
    } else {
        ParagraphElement.style.color = "red"
    }
})

ButtonElement.addEventListener("mouseover", () => {
    ButtonElement.style.background = "pink";

    const restoreBgColor = () => {
        ButtonElement.style.background = "white";
        ButtonElement.removeEventListener("mouseout", restoreBgColor)
    }

    ButtonElement.addEventListener("mouseout", restoreBgColor)
})

const TextArea = document.getElementById("textarea")

TextArea.addEventListener("keydown", (event) =>{
    console.log("Key pressed", event.key)

    TextArea.textContent = `${TextArea.textContent}${event.key}`
})

// accordion-style content
const AccordionTrigger = document.getElementById("accordion-trigger");

AccordionTrigger.addEventListener("click", ()=>{
    const Content = document.getElementById("accordion-content")

    Content.style.display == "none" ? Content.style.display= "block" : Content.style.display="none";
})

// image slideshow
let currentIndex = 0;

function slideShow(){
    const Images = document.getElementsByClassName('image')
    for (i = 0; i< Images.length; i++){
        Images[i].style.display = "none"
    }

    currentIndex++;
    if (currentIndex >= Images.length) currentIndex=0
    Images[currentIndex].style.display = "block"
}

setInterval(slideShow, 3000);

// form validation
const form = document.querySelector("form")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log("Submitting")

    const formData = new FormData(form);

    const username = formData.get("Username")
    const email = formData.get("Email")
    const password = formData.get("Password")

    console.log("username: ", username, " email: ", email, " password: ", password)

    if (username.length == 0){
        document.getElementById('username-error').style.display = 'block'
    } else {
        document.getElementById('username-error').style.display = 'none'
    }

    checkPassword(password)
    checkEmail(email)
})

function checkPassword(password){
    if (password.length < 8){
        document.getElementById('password-error').style.display = 'block'
        document.getElementById('password-error').textContent = 'Password must be 8 characters or more.'
        return false
    }

    const passwordArray = Array.from(password)
    const specialCharacters = ['#', '!', '$', '@']
    if (!passwordArray.some(character => specialCharacters.includes(character))){
        document.getElementById('password-error').style.display = 'block'
        document.getElementById('password-error').textContent = `Password must contain special character (${specialCharacters.toString()})`
        return false
    }

    document.getElementById('password-error').style.display = 'none'
    return true
}

function checkEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)){
        document.getElementById('email-error').style.display = 'block'
        return
    }

    document.getElementById('email-error').style.display = 'none'
}