import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CocktailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({
    name: '',
    recipe: '',
    shaken: '',
    served: '',
    glassware: '',
    story: '',
  })

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
    <div className="row pt-5">
      <div class="col-md-8 offset-md-2 border">
        <h1> {cocktail.name} </h1>
        
        <p><strong>Ingredients</strong></p>

        <div style={{ whiteSpace: 'pre-line' }}>
          <ul>
            {cocktail.recipe.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        
        <p><strong>Steps</strong></p>
          <ol>
            {/* add some info to DB */}
            <li>{cocktail.shaken} Shake the ingredients </li>
            <li>Serve {cocktail.served} in a {cocktail.glassware}</li>
            <li>Garnish: </li>
          </ol>
          

        <h4>Fun Facts</h4>
        <p>{cocktail.story}</p>
        <p>Cocktail Family:</p>
        <p>Similar Cocktails / Variations:</p>
        
      </div>
    </div>
  )
}

export default CocktailPage;