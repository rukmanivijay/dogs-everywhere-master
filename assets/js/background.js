chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.text())
          .then(data => {
            
            let dataObj = JSON.parse(data);
            let link = dataObj.message;
            let text = '{ "link" : \"' +dataObj.message +' \" }'
            var linkJson=JSON.parse(text);
            
            senderResponse({data: linkJson, index: message.index});
          })
          .catch(error => console.log("error", error))
      return true;  // Will respond asynchronously.
  }
});
