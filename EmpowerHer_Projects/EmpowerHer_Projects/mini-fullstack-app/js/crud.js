import { url } from "../js/metadata.js"
const nameInput = document.getElementById("name")
const addBtn = document.getElementById("addbtn")
const list = document.getElementById("list")

//creation
addBtn.onclick = function () {
    const n = nameInput.value
    fetch(`${url}.json`, {
        method: "POST",
        body: JSON.stringify({ n })
    })
        .then(() => {
            nameInput.value = ""
            loadData()
        })
}
function loadData() {
    fetch(`${url}.json`)
        .then((res) => res.json())
        .then((data) => {
            list.innerHTML = ""
            for (let key in data) {
                list.innerHTML += `<li>${data[key].n}</li>`
            }
        })
}

loadData()
