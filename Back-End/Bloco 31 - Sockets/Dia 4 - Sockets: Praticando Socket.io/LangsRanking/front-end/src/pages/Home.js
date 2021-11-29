import React, { useEffect, useState } from 'react';

import { CardDeck, CardGroup } from 'react-bootstrap';
import LanguageCard from '../components/LanguageCard';

function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/languages')
      .then(response => response.json())
      .then(data => {
        setLanguages(data);
        setIsLoading(false);
      });

  }, []);

  return (
    <div>
      <h1>Escolha sua linguagem favorita:</h1>

      {isLoading ? <p>Carregando...</p>
        : ( 
          <CardGroup>
            {languages.map(language => (
              <LanguageCard
                key={language._id}
                id={language._id}
                name={language.name}
                image={language.image}
                votes={language.votes}
                />
            ))}
          </CardGroup>
      )}
    </div>    
  );
}

export default Home;