import './style.css';

const inputFile = document.getElementById('fileInput');
const btnSubmit = document.getElementById('submitBtn');
const inputCaption = document.getElementById('captionInput');
const inputUsername = document.getElementById('usernameInput');

// eslint-disable-next-line max-lines-per-function
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append('file', inputFile.files[0]);
  data.append('caption', inputCaption.value);
  data.append('username', inputUsername.value);

  const options = {
    method: 'POST',
    body: data,
  };

  fetch('http://localhost:3000/pictures', options)
    .then((response) => response.json())
    .then((responseData) => {
      const pre = document.createElement('pre');

      pre.appendChild(
        document.createTextNode(JSON.stringify(responseData, null, 4)),
      );

      document.body.appendChild(pre);
    })
    .catch((err) => {
      alert(err.message);
      console.error(err);
    });
});
