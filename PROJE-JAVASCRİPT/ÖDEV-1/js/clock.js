let userName = prompt("Adınızı giriniz.");
document.querySelector(`#prompValue`).innerHTML = userName;

function tarihSaat() {   

const date = new Date()
var [hour, minutes, second, day]= [date.getHours(), date.getMinutes(), date.getSeconds(), date.toLocaleDateString()]             

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
document.querySelector(`#clock`).innerHTML = `${hour}:${minutes}:${second} / ${day}`
}
setInterval(tarihSaat, 1000);



const home = document.querySelector(`#home`)
const uganda = document.querySelector(`#uganda`)
const israel = document.querySelector(`#israel`)

function homeBtn() {
    israel.classList.remove(`active`)
    uganda.classList.remove(`active`)
    home.classList.add(`active`)

}

function ugandaBtn() {
    home.classList.remove(`active`)
    israel.classList.remove(`active`)
    uganda.classList.add(`active`)
    
    const mainText = document.querySelector(`#mainText`)
    mainText.classList.remove(`d-flex`)
    mainText.classList.add(`text-center`)
    
    mainText.innerHTML = `
    <p>Uganda'nın bizimle aynı saat dilimine sahip olduğunu biliyor muydun ${userName}?</p>
    <p>Ben bu ödevi yaparken öğrendim, ehe.</p>`
}

function israelBtn() {
    home.classList.remove(`active`)
    uganda.classList.remove(`active`)
    israel.classList.add(`active`)

    const mainText = document.querySelector(`#mainText`)
    mainText.classList.remove(`d-flex`)
    mainText.classList.add(`text-center`)
    
    mainText.innerHTML = `
    <p>İsrail'in bizimle aynı saat dilimine sahip olduğunu biliyor muydun ${userName}?</p>
    <p>Ben bu ödevi yaparken öğrendim, ehe.</p>`

    
}



    




