
const categories = [...document.querySelectorAll('#categories .item')]
let categoriesQuantity = 0
for (let i of categories) {
  categoriesQuantity += 1
}
console.log('Number of categories: ' + categoriesQuantity);

const firstCategory = categories[0]
console.log('Category: ' + firstCategory.firstElementChild.textContent);

const firstCategoryElements = firstCategory.lastElementChild.children
let firstCategoryElementsQuantity = 0
let firstCategoryElementsCalculation = [...firstCategoryElements].forEach( (el) => firstCategoryElementsQuantity += 1)

console.log(`Elements: ${firstCategoryElementsQuantity}`);

const secondCategory = categories[1]
console.log('Category: ' + secondCategory.firstElementChild.textContent);

const secondCategoryElements = secondCategory.lastElementChild.children
let secondCategoryElementsQuantity = 0
let secondCategoryElementsCalculation = [...secondCategoryElements].forEach((el) => secondCategoryElementsQuantity += 1)

console.log(`Elements: ${secondCategoryElementsQuantity}`);

const thirdCategory = categories[2]
console.log('Category: ' + thirdCategory.firstElementChild.textContent);

const thirdCategoryElements = thirdCategory.lastElementChild.children
let thirdCategoryElementsQuantity = 0
let thirdCategoryElementsCalculation = [...thirdCategoryElements].forEach((el) => thirdCategoryElementsQuantity += 1)

console.log(`Elements: ${thirdCategoryElementsQuantity}`);


const headings = document.querySelectorAll("h2")
headings.forEach((el) => el.classList.add("header"))

let allLi = []
const li = (allLi.push([...firstCategoryElements],[...secondCategoryElements], [...thirdCategoryElements]) )

for (const li of allLi) {
  li.forEach((el) => el.classList.add("text"))
  li.forEach ((el) => el.classList.add("window"))
}






// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies 
// Elements: 5