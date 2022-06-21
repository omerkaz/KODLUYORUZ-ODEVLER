function clock() {
    const date = new Date()
    var [hour, minutes, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(),
    date.toLocaleDateString()]
    switch (true) {
        case hour < 10:
            hour = `0` + hour;
            break;
        case minutes < 10:
            minutes = `0` + minutes;
            break;
        case second < 10:
            second = `0` + second;
            break;
    }

    let navClock = document.querySelector(`#clock`)
    navClock.innerHTML = `${hour}:${minutes}:${second} / ${day}`
}
setInterval(clock, 1000);

// Variables
let addBtn = document.querySelector(`#addBtn`)
let input = document.querySelector(`#toDoInput`)
let outputUl = document.querySelector(`#outputUl`)
let items;

loadItemsFromLS()

addBtn.addEventListener("click", inputItem)


// Add input's value to ul and localstorage
function inputItem() {
    if(input.value.trim() === ""){
        alert("Hatalı giriş!")
        return
    }
    createItem(input.value)
    setItemsLocalStorage(input.value)
    input.value = ""
}

// Create li
function createItem(text) {
    // create li
    let li = document.createElement(`li`)
    li.classList.add("list-group-item")
    li.innerText = text

    // create btn
    let btn = document.createElement(`button`)
    btn.classList.add(`close`, `bg-transparent`, `float-end`, `border`, `border-danger`, `px-2`, `py-1`)
    btn.onclick = function closed() {
        this.parentElement.remove()
        deleteItemFromLS(this.parentElement.textContent.slice(0,-1))
    }
    btn.innerHTML = `<span>×</span>`
    
    // add btn to li
    
    li.append(btn)
    
    // add li to ul
    outputUl.appendChild(li)
}

// get items from Local Storage
function getItemsLocalStorage() {
    if(localStorage.getItem(`items`) === null) {
        items = []
    }else {
        items = JSON.parse(localStorage.getItem(`items`))
    }
    return items;
}

// set item to Local Storage
function setItemsLocalStorage(text) {
    items = getItemsLocalStorage();
    items.push(text)
    localStorage.setItem(`items`, JSON.stringify(items))
}

function loadItemsFromLS() {
    items = getItemsLocalStorage()
    items.map(function (item) {
        createItem(item)
    })
}

function deleteItemFromLS(text) {
    items = getItemsLocalStorage()
    items.map(function(item,index){
        if(item === text) {
            items.splice(index,1);
        }
    })
    localStorage.setItem(`items`, JSON.stringify(items))
}



