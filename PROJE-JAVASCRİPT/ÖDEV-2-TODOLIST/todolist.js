function clock() {    
    const date = new Date()
    var [hour, minutes, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), 
    date.toLocaleDateString()]
    switch(true) {
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



function add() {
    
    let classListType = ["primary","secondary","success","danger","warning","dark"]

    let toDoInputDomValue = document.querySelector(`#toDoInput`).value
    
    let classListCheck = document.querySelector(`#classListCheck`)

    let outputUlDom = document.querySelector(`#outputUl`)

    let createLi = document.createElement(`li`)
    
    if (toDoInputDomValue.trim() == "") {
        alert('Lütfen boş bırakmayın!');
        
    }else {if (classListCheck.classList.contains("primary") === false){
        createLi.classList.add("list-group-item",`list-group-item-${classListType[0]}`)
            outputUlDom.appendChild(createLi)
        
            createLi.innerHTML = `
            ${toDoInputDomValue}
            <button type="button" onclick="close(button) class="close bg-transparent float-end border border-danger px-2 py-1">
            <span>&times;</span>
            </button>
            `
            classListCheck.classList.add(`${classListType[0]}`)
    
        } else if (classListCheck.classList.contains("primary") === true && classListCheck.classList.contains("secondary") === false ){
        
            createLi.classList.add("list-group-item",`list-group-item-${classListType[1]}`)
            outputUlDom.appendChild(createLi)
        
            createLi.innerHTML = `
            ${toDoInputDomValue}
            <button type="button" id="remove" onclick="close(button)" class="close bg-transparent float-end border border-danger px-2 py-1">
            <span>&times;</span>
            </button>
            `
            classListCheck.classList.add(`${classListType[1]}`)
        }else if (classListCheck.classList.contains("primary") === true && classListCheck.classList.contains("secondary") === true) {
            createLi.classList.add("list-group-item",`list-group-item-${classListType[2]}`)
            outputUlDom.appendChild(createLi)
        
            createLi.innerHTML = `
            ${toDoInputDomValue}
            <button type="button" id="remove" onclick="close(button)" class="close bg-transparent float-end border border-danger px-2 py-1">
            <span>&times;</span>
            </button>
            `
            classListCheck.classList.remove("primary")
            classListCheck.classList.remove("secondary")
            classListCheck.classList.add(`${classListType[2]}`)
        }
    
        createLi.innerHTML = `${toDoInputDomValue}`
        document.forms['form'].reset()
    
        let createBtn = document.createElement(`button`)
            createBtn.classList.add(`close`, `bg-transparent`,`float-end`,`border`,`border-danger`, `px-2`, `py-1`)
            createBtn.onclick = function closed(button) {
            this.parentNode.parentNode.removeChild(this.parentNode);
            }
    
        let createSpn = document.createElement(`span`)
            createSpn.innerHTML = `&times;`
            createBtn.appendChild(createSpn)
            createLi.appendChild(createBtn)
            outputUlDom.appendChild(createLi)}

    
}



    
    



