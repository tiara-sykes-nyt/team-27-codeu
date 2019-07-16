/**
* Adds a public feed link to the page
*/
function fetchMessages(){
  const url = '/feed';
  fetch(url).then((response) => {
    return response.json();
  }).then((messages) => {
    // a message container for all users' messages
    const messageContainer = document.getElementById('message-container');
    if(messages.length == 0){
      messageContainer.innerHTML = '<p>There are no posts yet.</p>';
    }
    else{
      messageContainer.innerHTML = '<p>You are viewing everyone\'s post. Ready to claim a request? Do it now!</p>';
    }

    // for each message, crate a message div and add the corresponding text
    messages.forEach((message) => {
      const messageDiv = buildMessageDiv(message);
      if (message.status == "2")
        messageContainer.appendChild(messageDiv);
    });
  });
}

/** buildMessageDiv creates a message div for each message
* including username, post date, and the content of the message
*/
function buildMessageDiv(message){
  //username div
  const usernameDiv = document.createElement('div');
  usernameDiv.classList.add("left-align");
  usernameDiv.appendChild(document.createTextNode(message.user));

  //date and time of the post
  const timeDiv = document.createElement('div');
  timeDiv.classList.add('right-align');
  timeDiv.appendChild(document.createTextNode(new Date(message.timestamp)));

  // a header to hold username and post date
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('message-header');
  headerDiv.appendChild(usernameDiv);
  headerDiv.appendChild(timeDiv);

  // a button div to hold the button for claiming food requests
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('claim-button');
  // create the button
  var button = document.createElement("button");
  button.innerHTML = "Claim";
  // add button logic
  button.addEventListener("click", function(){
    // hide the button
    buttonDiv.removeChild(button);
    // shows the claim tag
    const claimTag = document.createElement('div');
    claimTag.classList.add('claim-tag');
    claimTag.innerHTML = "Request claimed";
    bodyDiv.appendChild(claimTag);
  });

  // add the button to to the buttonDiv
  buttonDiv.appendChild(button);

  // a body to hold the the content of the message and the button
  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('message-body');
  bodyDiv.innerHTML = message.text;
  bodyDiv.appendChild(buttonDiv);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('message-image');
  imageDiv.innerHTML = "<img src=\"" + message.imageURL + "\"/>";

  // a general message div consists of the header and body of each message
  const messageDiv = document.createElement('div');
  messageDiv.classList.add("message-div");
  messageDiv.appendChild(headerDiv);
  messageDiv.appendChild(bodyDiv);
  if (message.imageURL != null)
    messageDiv.appendChild(imageDiv);

  return messageDiv;
}

// Fetch data and populate the UI of the page.
function buildUI(){
  fetchMessages();
}
