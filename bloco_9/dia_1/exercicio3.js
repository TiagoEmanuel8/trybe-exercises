const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    //o exercio pediu que criasse essa função
    //O interessante é que essa função setTimeout(calback, time in ms), simula a assicronicidade, aqui ela atrasa o console.log
    setTimeout(() => console.log("Returned planet: ", mars), 4000) ;
  };
  
  getPlanet();