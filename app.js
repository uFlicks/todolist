
const form = document.querySelector("form");
const input = document.querySelector("#input");
const list = document.querySelector("ul");

///
form.addEventListener("submit", function(e) {
  e.preventDefault();
  toDoLine();
  store()
  input.value = "";
});

list.addEventListener('click', function(e){
  if (e.target.nodeName === 'BUTTON') {
      e.target.closest('LI').remove();
  }
})
list.addEventListener('dblclick',function(e){
  if (e.target.nodeName === 'LI') {
    e.target.closest('LI').className += ' active'
}
})



function toDoLine() {
  if (input.value !== '') {
  const toDo = input.value;
  const newLi = document.createElement("li");
  newLi.classList.add('ulist')
  newLi.innerText = toDo;
  const delBtn = document.createElement("button");
  delBtn.classList.add('delBtn')
  delBtn.innerText = 'x'
  newLi.append(' ', delBtn);
  list.append(newLi);
    } else {
      alert('add something to the list!')
    }
  }




//! item store in local storage
function store() {
  window.localStorage.myitems = list.innerHTML;
}

//! function for add or move the data from local storage 
function getValues() {
  var storedValues = window.localStorage.myitems;
  if(!storedValues) {
    list.innerHTML = ""
  }
  else {
    list.innerHTML = storedValues;
  }
}

getValues();
