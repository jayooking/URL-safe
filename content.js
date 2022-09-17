let hashLinks = document.getElementsByTagName("a")
let buttEl = []

function getAllUrls() {
  for (i = 0; i < hashLinks.length; i++) {
    let listBtn = ""
    listBtn += `
        <button id="rLeads-${i}" style=
                "background-color: rgb(60, 235, 98);
                color: #ffffff;
                border: none;
                border-radius: 1px;
                padding: 1px 4px 1px 4px;
                font-weight: lighter;"
        >
            o
        </button>
    `
    hashLinks[i].outerHTML += listBtn
  }
}

getAllUrls()

for (i = 0; i < hashLinks.length; i++){
  getLinks(i)
}

function getLinks(i){
  buttEl.push(document.getElementById("rLeads-" + i))
  // buttEl[i].addEventListener("click", function() {
  //   console.log(hashLinks[i].href)
  // })


}

buttEl[1].addEventListener("click", function() {
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell)
  })
})