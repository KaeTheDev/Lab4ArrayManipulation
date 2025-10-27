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
function addItem(item) {
    if(shoppingList.includes(item)) {
        return "Item already in list"
    }
    shoppingList.push(item)
}
addItem("test")
addItem("test")
addItem("secondtest")
addItem("secondtest")
addItem("different")


console.log(shoppingList)

function filterItems(searchTerm) {
    return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
}

console.log(filterItems("diff"))

// Task 3: Render the List in the Browser
let list = []
let itemInput = document.getElementById("itemInput")
let addItem = document.getElementById("addItem")
let removeItem = document.getElementById("removeItem")
let itemList = document.getElementById("list")

addItem.addEventListener("click", function() {
    let item = itemInput.value

    if(item === ""){
        alert("Please enter an item")
    return;
    }

    list.push(item);
    renderList();
    itemInput.value = "";
})

removeItem.addEventListener("click", function(){
    list.pop();
    renderList();
})

function renderList() {
    itemList.innerHTML = ""
    for(let i = 0; i < list.length; i++) {
        let listItem = document.createElement("li")
        listItem.innerText = list[i]
        itemList.appendChild(listItem)
    }
}