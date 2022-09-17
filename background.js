// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Howdy!")
// });


// function runLeads() {
//     console.log("Howdy! Again")
// }

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension")

    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"})
      
  }
)