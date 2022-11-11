let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") 
let ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})


function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {

      //  listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

      listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>
        `

        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li) 
        listItems = li */

    }
    
    ulEl.innerHTML = listItems
}













/*
let myHtml = []


const innerEl = document.getElementById("inner")

myHtml.push(innerEl.innerHTML = "<button onclick='buy()'>Buy!</button>")


for (let i = 0; i < myHtml.length; i++ ) {
    addEventListener("click", function buy(){
        myHtml.push(innerEl.innerHTML += "<p>Thank you for buying!</p>")  
      })
      
}

*/








