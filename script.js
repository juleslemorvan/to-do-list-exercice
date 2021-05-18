const list = document.getElementById("list");
const form = document.querySelector("form");
const item = document.getElementById("item");

//add element

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  storage();
  item.value = "";
});

// remove element

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storage();
});

//storage element

function storage() {
  window.localStorage.todolist = list.innerHTML;
}

function getvalues() {
  let storageContent = window.localStorage.todolist;
  if (!storageContent) {
    list.innerHTML = "<li>Cliquez sur un élement pour le supprimer</li>";
  } else {
    list.innerHTML = storageContent;
  }
}
getvalues();
