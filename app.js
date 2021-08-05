const inputBox = document.querySelector("#input-area");
const addButton = document.querySelector("button");
const notebook = document.querySelector("#notebook");
const myDate = document.querySelector("#date");
const myTime = document.querySelector("#time");

setInterval (omerTimer, 1000)
function omerTimer() {
    let today = new Date().toLocaleString();
    myDate.innerHTML = today.substr(0,10);
    myTime.innerHTML = today.substr(10);

}

addButton.addEventListener("click", () => {
    let items = inputBox.value;
    if (items == "") {
        alert("Please enter your plan")
    } 
    else {
      
        const planList = document.createElement("div");
        notebook.appendChild(planList)
        planList.style.display = "flex";
        planList.style.justifyContent = "space-between";
        planList.style.minWidth = "80%"

        
        const kutu = document.createElement("input");
        kutu.setAttribute("type", "checkbox")
        planList.appendChild(kutu)
        kutu.style.margin = "10px 0 0 130px"
        kutu.style.minWidth = "1.5rem";
        kutu.style.minHeight = "1.5rem";
        kutu.style.alignItems = "flex-end"
        
        
        const task = document.createElement("h4");
        task.textContent = inputBox.value
        planList.appendChild(task);
        
        
        const trashbin = document.createElement("i");
        trashbin.setAttribute("class", "fas fa-trash")
        planList.appendChild(trashbin );
        trashbin.style.margin = "5px 50px 0 0"


        kutu.addEventListener("click", () => {
            kutu.checked ? task.className = "checked" : task.className = "unchecked"
        })

        trashbin.addEventListener("click", () => {
            const onay = confirm("Are you sure delete this plan?");
            onay ? planList.remove(): null;
        })   

    }
})

addButton.addEventListener("click", () => inputBox.value = "")