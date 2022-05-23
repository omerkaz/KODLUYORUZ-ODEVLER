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
        classListCheck.classList.add(`${classListType[0]}`)
    
        }else if (classListCheck.classList.contains("primary") === true && classListCheck.classList.contains("secondary") === false ){
            createLi.classList.add("list-group-item",`list-group-item-${classListType[1]}`)
            classListCheck.classList.add(`${classListType[1]}`)

        }else if (classListCheck.classList.contains("primary") === true && classListCheck.classList.contains("secondary") === true) {
            createLi.classList.add("list-group-item",`list-group-item-${classListType[2]}`)
            classListCheck.classList.remove("primary")
            classListCheck.classList.remove("secondary")
            classListCheck.classList.add(`${classListType[2]}`)
        }
    
        let createBtn = document.createElement(`button`)
            createBtn.classList.add(`close`, `bg-transparent`,`float-end`,`border`,`border-danger`, `px-2`, `py-1`)
            createBtn.onclick = function closed(button) {
            this.parentNode.parentNode.removeChild(this.parentNode);
            }
    
        let createSpn = document.createElement(`span`)
            createSpn.innerHTML = `&times;`

        createBtn.appendChild(createSpn)
        createLi.appendChild(createBtn)
        createLi.innerHTML = `${toDoInputDomValue}`
        _insertChild(outputUlDom,createLi,outputUlDom.childNodes[0])}

        document.forms['form'].reset()    
}

function _insertChild(parent,newElement,refElement){
    parent.insertBefore(newElement,refElement);
}



    
    



