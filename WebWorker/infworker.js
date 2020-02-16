
async function postMessageLoopEvent(e)
{
    let resp_data

    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000))

        resp_data = e.data +' : '+ Math.random()

        // Send message to main
        self.postMessage(resp_data)
    }
}

// Add function to EventListener
self.addEventListener('message', postMessageLoopEvent, false)