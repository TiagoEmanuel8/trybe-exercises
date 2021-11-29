import React, { useEffect, useState } from 'react';

import { Card, Button } from 'react-bootstrap';

const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');


function LanguageCard({ id, name, image, votes}) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  useEffect(() => {
    socket.customId = `${id}-${name}`

    socket.on('refreshCurrentVotes', (data) => {
      console.log(socket.customId);
      if (id === data._id) setCurrentVotes(data.votes);
    })
  }, [id]);


  const handleClick = (e) => {
    socket.emit('increaseVotes', { id });
    // setCurrentVotes(votes + 1);
  }

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><span>{name}</span></Card.Title>
        <Card.Text>
          Votos: <span>{currentVotes}</span>  
        </Card.Text>
        <Button onClick={handleClick}>Votar</Button>
      </Card.Body>
    </Card>
  );
}

export default LanguageCard;