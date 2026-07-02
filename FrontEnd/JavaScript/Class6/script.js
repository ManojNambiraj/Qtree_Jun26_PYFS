// DOM --> Document Object Model

// let ele = document.getElementById("demo")

// console.log(ele);

// ele.innerText = "Good evening"
// ele.innerHTML = "<h1>Good</h1>"

// let ele1 = document.getElementsByClassName("para")

// let ele1 = document.getElementsByTagName("p")

// console.log(ele1);

// ele1[0].innerText = "hello"
// ele1[1].innerText = "world"

// let ele2 = document.querySelector("#demo")

// ele2.innerHTML = "Hello world, how are you?"

// Create Elements:

    // let newele = document.createElement("ul");
    // newele.setAttribute("id", "header");
    // document.body.append(newele);

    // let listItems = document.createElement("li");
    // listItems.innerText = "Sportz";
    // newele.appendChild(listItems);

    // let listItems1 = document.createElement("li");
    // listItems1.innerText = "Music";
    // newele.appendChild(listItems1);

// Event Listeners

let bankBalance = 0
let temp = 0

function monitor(event){
    temp = Number(event.target.value);
}

function deposite(){
    bankBalance += temp

    console.log("Bank Balance: " + bankBalance);
}

function withdraw(){
    bankBalance -= temp;

    console.log("Bank Balance: " + bankBalance);
}