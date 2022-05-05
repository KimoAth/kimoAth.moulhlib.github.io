// increment
let countEl = document.getElementById("count-el")

function increment1() {
    let comp1=document.getElementById("choice1")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp1.textContent)
}

function increment2(){
    let comp2=document.getElementById("choice2")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp2.textContent)
}

function increment3(){
    let comp3=document.getElementById("choice3")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp3.textContent)
}

function increment4(){
    let comp4 = document.getElementById("choice4")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp4.textContent)
}

function increment5(){
    let comp5 = document.getElementById("choice5")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp5.textContent)
}

function increment6(){
    let comp6 = document.getElementById("choice6")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp6.textContent)
}

function increment7(){
    let comp7 = document.getElementById("choice7")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp7.textContent)
}

function increment8(){
    let comp8 = document.getElementById("choice8")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp8.textContent)
}
function increment9(){
    let comp9 = document.getElementById("choice9")
    countEl.textContent = parseFloat(countEl.textContent) + parseFloat(comp9.textContent)
}

let counter = 0
// milk
let minu1 = document.getElementById("choice1")
function minus1(){
    if (minu1.textContent==1){
        counter=0
    }
    else if (minu1.textContent > 1){
        minu1.textContent = minu1.textContent - 1
    }
}

let plu1=document.getElementById("choice1")
function plus1(){
    plu1.textContent = parseInt(plu1.textContent) + 1
}
// lben
let minu2 = document.getElementById("choice2")
function minus2(){
    if (minu2.textContent==1){
        counter=0
    }
    else if (minu2.textContent > 1){
        minu2.textContent = minu2.textContent - 1
    }
}
let plu2=document.getElementById("choice2")
function plus2(){
        plu2.textContent = parseInt(plu2.textContent) + 1
}
// rayeb beldi sucree
let minu3 = document.getElementById("choice3")
function minus3(){
    if (minu3.textContent==1){
        counter=0
    }
    else if (minu3.textContent > 1){
        minu3.textContent = minu3.textContent - 1
    }
}

let plu3=document.getElementById("choice3")
function plus3(){
        plu3.textContent = parseInt(plu3.textContent) + 1
}
// rayeb messouss
let minu4 = document.getElementById("choice4")
function minus4(){
    if (minu4.textContent==1){
        counter=0
    }
    else if (minu4.textContent > 1){
        minu4.textContent = minu4.textContent - 1
    }
}

let plu4=document.getElementById("choice4")
function plus4(){
    plu4.textContent = parseInt(plu4.textContent) + 1
}
// zebda beldiya
let minu5 = document.getElementById("choice5")
function minus5(){
    if (minu5.textContent==1){
        counter=0
    }
    else if (minu5.textContent > 1){
        minu5.textContent = minu5.textContent - 1
    }
}

let plu5=document.getElementById("choice5")
function plus5(){
    plu5.textContent = parseInt(plu5.textContent) + 1
}
// smen beldi
let minu6 = document.getElementById("choice6")
function minus6(){
    if (minu6.textContent==1){
        counter=0
    }
    else if (minu6.textContent > 1){
        minu6.textContent = minu6.textContent - 1
    }
}

let plu6=document.getElementById("choice6")
function plus6(){
    plu6.textContent = parseInt(plu6.textContent) + 1
}
// jben beldi
let minu7 = document.getElementById("choice7")
function minus7(){
    if (minu7.textContent==1){
        counter=0
    }
    else if (minu7.textContent > 1){
        minu7.textContent = minu7.textContent - 1
    }
}

let plu7=document.getElementById("choice7")
function plus7(){
        plu7.textContent = parseInt(plu7.textContent) + 1
}
// jben za3tar 
let minu8 = document.getElementById("choice8")
function minus8(){
    if (minu8.textContent==1){
        counter=0
    }
    else if (minu8.textContent > 1){
        minu8.textContent = minu8.textContent - 1
    }
}
let plu8=document.getElementById("choice8")
function plus8(){
        plu8.textContent = parseInt(plu8.textContent) + 1
}
// jben b habba souda 
let minu9 = document.getElementById("choice9")
function minus9(){
    if (minu9.textContent==1){
        counter=0
    }
    else if (minu9.textContent > 1){
        minu9.textContent = minu9.textContent - 1
    }
}

let plu9=document.getElementById("choice9")
function plus9(){
        plu9.textContent = parseInt(plu9.textContent) + 1
}
//prices
let pr = document.getElementById("prix5")
function pr1(){
    pr.textContent = "20.00 درهم"
}
function pr2(){
    pr.textContent = 20 * 2 + ".00 درهم"
}
function pr3(){
    pr.textContent = 20 * 4 + ".00 درهم"
}


let pri = document.getElementById("prix6")
function pr4(){
    pri.textContent = "37.50 درهم"
}
function pr5(){
    pri.textContent = 37.50 * 2 + ".00 درهم"
}
function pr6(){
    pri.textContent = 37.50 * 4 + ".00 درهم"
}


let price = document.getElementById("prix7")
function pr7(){
    price.textContent = "14.00 درهم" 
}
function pr8(){
    price.textContent = 14.00 * 2 + ".00 درهم"
}
function pr9(){
    price.textContent = 14.00 * 4 + ".00 درهم"
}


let pricce = document.getElementById("prix8")
function pr10(){
    pricce.textContent = "17.00 درهم"
}
function pr11(){
    pricce.textContent = 17.00 * 2 + ".00 درهم"
}
function pr12(){
    pricce.textContent = 17.00 * 4 + ".00 درهم"
}


let pricee = document.getElementById("prix9") 
function pr13(){
    pricee.textContent = "17.00 درهم"
}
function pr14(){
    pricee.textContent = 17 * 2 + ".00 درهم"
}
function pr15(){
    pricee.textContent = 17 * 4 + ".00 درهم"
}

