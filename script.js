/*const obj = {name: "Fanis", 
            age: 22,
            city: "Nairobi"
         }
const myJSON = JSON.stringify(obj)
console.log(myJSON)

const credits = 12

if (credits > 0) {
    console.log("Let's play piano")
} else {
    console.log("Sorry, You have no credits")
}

function greetUser() {
    we 
}
function add(one, two) {
    return one + two
    
}
console.log(add(3,4))
console.log(add(9,102))


function getFirst(arr){
    console.log(arr)
}
getFirst(2)


let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function myArr(courses) {
    for(let i = 0; i < courses.length; i++){
        console.log(courses[i])
    }
} 
myArr(myCourses)

 let myArr = ["www.comeon.com", "www.meto.com"]
 
 localStorage.setItem("myLeads", JSON.stringify(myArr))
 console.log(myArr)
 localStorage.getItem("myLeads")
 
 
 function generateSentence(desc, arr) {
    let baseString = ` The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for(i = 0; i < arr.length; i++){
        if(i === lastIndex){
            baseString += arr[i]
        } else {
            baseString += arr[i] + ","
        }
        
    }
    return baseString
 }
 const sentence = generateSentence("highest mountains", ["Mount Everest"])
 console.log(sentence)


const imgs = [
    "images/benjamin-voros-AD6rn3vqG7o-unsplash.jpg",
    "images/boxed-water-is-better-fbbxMwwKqZk-unsplash.jpg",
    "images/derek-thomson-TWoL-QCZubY-unsplash.jpg"
]
const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for(i = 0; i < imgs.length; i++){
        imgsDOM += `<img class="team-img" src="${imgs[i]}"`
    }
    container.innerHTML = imgsDOM
}
renderImages() 

const totalPrice = Math.round((Number("420.8272929902") + Number.EPSILON) * 100) / 100 

const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy $${ totalPrice }`*/ 

