
function postMessageEvent(e)
{
    let resp_data = e.data +' : '+ Math.random()

    // Send message to main
    self.postMessage(resp_data)
}

// Add postMessageEvent function to EventListener
self.addEventListener('message', postMessageEvent, false)