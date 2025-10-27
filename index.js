// Task 1: Array Manipulation Basics
const shoppingList = []
function addItem(item) {
    shoppingList.push(item)
}
console.log(addItem("test"))
console.log(addItem("second test"))

console.log(shoppingList)

function removeLastItem(item) {
    shoppingList.pop(item)
}
removeLastItem()
console.log(shoppingList)

function displayList() {
    shoppingList.forEach(item => {
        console.log(item)
    }) 
}
displayList()

// Task 2: Filter and Search an Array

// Task 3: Render the List in the Browser