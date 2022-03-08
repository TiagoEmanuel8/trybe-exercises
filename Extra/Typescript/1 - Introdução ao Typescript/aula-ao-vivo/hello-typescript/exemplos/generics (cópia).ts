import axios from 'axios';

// ja estou tipando o retorno da api
type Person = {
  name: string,
  height: string,
  mass: string,
}

// esse <> ja chama a tipagem 
const main = async () => {
  const res = await axios.get<Person>('https://swapi.dev/people/1');
  console.log(res.data)
}

main()