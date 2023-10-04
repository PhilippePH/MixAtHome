import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CocktailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState([])

  const getCocktail = async () => {
    try {
      const response = await fetch(`http://localhost:5000/cocktails/${id}`);
      const jsonData = await response.json();

      setCocktail(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <Fragment>
      <h1 className='text-center mt-5'> {cocktail.name} </h1>
      <p>{cocktail.story}</p>
      <p>{cocktail.recipe}</p>
      <p>{cocktail.shaken} Shake the ingredients </p>
      <p>Serve {cocktail.served} in a {cocktail.glassware}</p>
      
    </Fragment>
  )
}

export default CocktailPage;