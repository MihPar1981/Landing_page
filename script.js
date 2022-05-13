// let elem = document.querySelector(".grid3");
// function createTable(parent, rows, cols) {
//     let table = document.createElement("table");
//         for( let i = 0; i < rows; i++) {
//             let tr = document.createElement("tr");
//             for( let j = 0; j < cols; j++) {
//                 let td = document.createElement('td');
//                 tr.appendChild(td);
//                 table.appendChild(tr);
//             }
//             parent.appendChild(table);
//         }
// }
// createTable(elem, 4, 12);


// document.body.append(document.createElement('table'))
// let newArr = []
// let count = 0
//   function foo(){
//     newArr.push((document.createElement('tr')))
//     document.querySelector('table').append(newArr[count])
// let arr = []
// for(let i = 0; i < 4; i++){
//     arr.push(document.createElement('td'))
// }
// arr.map(item => (newArr[count]).append(item))
// for(let elem of arr){
//     elem.innerHTML = 'Hello'
//     elem.style = ''
// }
// console.log(newArr)
// count++
// }
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   foo()
//   document.querySelector('table').style = 'display: flex; flex-direction: column'

document.querySelector(".frame9__btn").addEventListener("click", function() {
    let obj = {
        from: document.getElementById("from").value,
        to: document.getElementById("to").value,
        phone: document.getElementById("phone").value,
    }
    console.log(obj);
    for (let elem of document.getElementsByClassName("frame9__input")) {
        elem.value = "";
    }
});

document.querySelector(".btn2").addEventListener("click", function() {
    let obj = {
        fromOne: document.getElementById("fromOne").value,
        weight: document.getElementById("weight").value,
        toOne: document.getElementById("toOne").value,
        volum: document.getElementById("volum").value,
        phone: document.getElementById("phone").value,
        timecheck: document.getElementById("timecheck").value,
    }
    console.log(obj);
    for (elem of document.getElementsByClassName("grid1")) {
        elem.value = "";
    }
});

// accordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));