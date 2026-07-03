// DOM --> Document Object Model

// let ele = document.getElementById("demo")

// console.log(ele);

// ele.innerText = "Good evening"
// ele.innerHTML = "<p>Good</p>"

// let ele1 = document.getElementsByClassName("para")

// let ele1 = document.getElementsByTagName("p")

// console.log(ele1);

// ele1[0].innerText = "hello"
// ele1[1].innerText = "world"

// let ele2 = document.querySelector("p")
// let ele2 = document.querySelectorAll(".para")

// console.log(ele2);

// ele2[1].innerHTML = "Hello world, how are you?"

// Create Elements:

// let newele = document.createElement("ul");
// newele.setAttribute("class", "header");
// document.body.append(newele);

// let listItems = document.createElement("li");
// listItems.innerText = "Sportz";
// newele.appendChild(listItems);

// let listItems1 = document.createElement("li");
// listItems1.innerText = "Music";
// newele.appendChild(listItems1);

// let olele = document.createElement("ol");
// olele.setAttribute("class", "header");
// document.body.append(olele);

// let ollistItems = document.createElement("li");
// ollistItems.innerText = "Sportz";
// olele.appendChild(ollistItems);

// let ollistItems1 = document.createElement("li");
// ollistItems1.innerText = "Music";
// olele.appendChild(ollistItems1);

// Event Listeners

// let bankBalance = 0;
// let temp = 0;

// function userInput(event) {
//   temp = Number(event.target.value);
// }

// function deposite() {
//   bankBalance += temp;

//   let ele = document.getElementById("display")
  
//   ele.innerText = bankBalance;
// }

// function withdraw() {
//   bankBalance -= temp;

//   let ele = document.getElementById("display")
  
//   ele.innerText = bankBalance;
// }
