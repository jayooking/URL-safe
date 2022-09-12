let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        eventLeads(myLeads)
    })
    
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    eventLeads(myLeads)
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    eventLeads(myLeads)
})

inputBtn.addEventListener("click", function() {
    saveLeads()
})

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        saveLeads()
    }
})

function saveLeads() {
    myLeads.push(inputEl.value)

    // Store Leads
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // Output Leads
    eventLeads(myLeads)

    // Clear Field
    inputEl.value = ""

    // Check
    console.log(localStorage.getItem("myLeads"))
}

function eventLeads(leads) {
    let listItems = ""
    for (i = 0 ; i < leads.length; i++) {
        listItems += 
        `<li>
            <a target="_blank" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}
