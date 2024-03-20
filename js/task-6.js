const controls = document.querySelector("#controls")
const number = controls.firstElementChild
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector("#boxes")



function newBoxCreating(event) {
    boxes.innerHTML = ''
    let previousSize = 10
    if (number.value > 100 || number.value < 1) {
        return
    }
    for (let i = 0; i < Number(number.value); i++) {
        previousSize += 10
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
        }
        const color = getRandomHexColor()
        boxes.insertAdjacentHTML("beforeend", "<div class='box' style='width: " + (previousSize + 10) + "px; height: " + (previousSize + 10) + "px; background-color:" + color + ";' ></div>")
    }
}
function destroyBox(event) {
    boxes.innerHTML = ''
}
createBtn.addEventListener("click", newBoxCreating)
destroyBtn.addEventListener("click", destroyBox)

number.classList.add("numberWindow")
createBtn.classList.add("createButton")
destroyBtn.classList.add("destroyButton")
