import logo from './logo.svg';

import './App.css';
const task = (value) => {
  return (
    <li>{value}</li>
  );
};
const compromissos = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

function App() {
  return (
    //fazendo direto
    <ul>{ compromissos.map((item) => <li> {item} </li>)}</ul>

    //acionando a callback
    // compromissos.map((item) => task(item))
  );
}

export default App;
