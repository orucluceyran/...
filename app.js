document.getElementById('button').addEventListener('click', function() {
  var messages = ["Message 1", "Message 2", "Message 3", "Message 4"];
  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  var messageBox = document.createElement('div');
  messageBox.classList.add('messageBox');
  messageBox.textContent = randomMessage;
  
  document.getElementById('messageContainer').appendChild(messageBox);
  
  setTimeout(function() {
    messageBox.remove();
  }, 3000);
});
