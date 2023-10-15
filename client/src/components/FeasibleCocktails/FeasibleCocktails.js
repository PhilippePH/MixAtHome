import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FeasibleCocktails = () => {
  const navigate = useNavigate();

  const openCocktailPage = (id) => {
    navigate(`/cocktails/${id}`, {replace: true});
  };


  const [cocktails, setCocktails] = useState([])

  const getCocktails = async () => {
    try {
      const response = await fetch("http://localhost:5000/feasible_cocktails");
      const jsonData = await response.json();

      setCocktails(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <Fragment>
      <h1 className='text-center mt-5'> Feasible Cocktails </h1>
      <div className="container pt-5">
        <div className="row">
          { cocktails.map(cocktail => (
            <div className="col-md-4 p-1" key={cocktail.id}>
              <button 
                type="button" 
                className="btn btn-light btn-lg w-100" 
                onClick={() => openCocktailPage(cocktail.id)}>
                {cocktail.name}
              </button>
            </div>
            )) 
          }
        </div>
      </div>
    </Fragment>
  )
}

export default FeasibleCocktails;