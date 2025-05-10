const inputbox = document.querySelector("#Input-btn");
const addbtn = document.querySelector("#addBtn");
const ulList = document.querySelector("#taskList");

addbtn.addEventListener("click", function () {
//   const inputValue = document.querySelector("#input").value;
  if (inputbox.value === "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputbox.value;
    ulList.appendChild(li);
    inputbox.value = ""; // Clear the input field
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";// Unicode for a cross mark
    li.appendChild(span);
  }
  savedata();
});

ulList.addEventListener("click",  (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", ulList.innerHTML);
}

function showTask() {
    ulList.innerHTML = localStorage.getItem("data");
}

showTask();