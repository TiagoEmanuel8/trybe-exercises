const socket = window.io('http://localhost:3000');

const createLi = (notification) => {
  const li = document.createElement('li');
  const liText = document.createTextNode(notification);
  li.appendChild(liText);
  document.getElementById('news').appendChild(li);
}
// 6.1 - escutando a msg que veio do back
socket.on('notification', createLi);
// socket dispara varias msgs e io dispara so uma msg
socket.on('loadNotifications', (notifications) => {
  notifications.forEach(notification => {
    createLi(notification)
  });
});