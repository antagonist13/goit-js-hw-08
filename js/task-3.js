const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "" || event.currentTarget.value.trim().length === 0 )return
  textOutput.textContent = event.currentTarget.value.trim()
});

const mainText = document.querySelector("h1")
mainText.classList.add("header")
textInput.classList.add("window","text")