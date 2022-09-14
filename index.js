let myLeads = []
let myDel = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        location.reload()
    })
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    location.reload()
})

inputBtn.addEventListener("click", function() {
    saveLeads()
})

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        saveLeads()
        
    }
    
})

inputEl.focus()

function saveLeads() {
    myLeads.push(inputEl.value)

    // Store Leads
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // Clear Field
    inputEl.value = ""

    // Check
    console.log(localStorage.getItem("myLeads"))

    // Output Leads
    // render(myLeads)
    location.reload()
}

function render(leads) {
    let listItems = ""
    for (i = 0 ; i < leads.length; i++) {
        listItems += 
        `<li>
            <button class="deli" id="del-i${i}">x</button>
            <a target="_blank" href="${leads[i]}">
                ${leads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

for (i = 0; i < myLeads.length; i++) {
    deleBtn(i)
}

function deleBtn(i) {
    myDel.push(document.getElementById("del-i" + i))    
    myDel[i].addEventListener("click", function() {
        location.reload()
        myLeads.splice(i, 1)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    })
}