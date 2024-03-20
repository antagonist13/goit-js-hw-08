const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
    };
    if (info.email === '' || info.password === '') {
        alert('All form fields must be filled in')
        return
    }
    console.log(info)
    event.currentTarget.reset()
}

const label = form.firstElementChild
label.classList.add("label")
label.nextElementSibling.classList.add("label")

const button = form.lastElementChild
button.classList.add("button")
button.style.width = "86px"

const firstInput = label.firstElementChild
firstInput.classList.add("window")
const secondInput = label.nextElementSibling.lastElementChild
secondInput.classList.add("window")