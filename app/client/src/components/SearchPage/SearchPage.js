import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SearchPage = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/cocktails/${id}`, {replace: true});
  };

  const [cocktails, setCocktails] = useState([])

  const getCocktails = async () => {
    try {
      const response = await fetch("http://localhost:5000/cocktails");
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
    <Fragment className="Search">
      <h1 className='text-center mt-5'> Search here </h1>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Cocktail Name</th>
          </tr>
        </thead>
        <tbody>
          {cocktails.map(cocktail =>(
            <tr key={cocktail.id}>
              <td>
                <button type="button" class="btn btn-light btn-lg w-100"
                  onClick={() => handleClick(cocktail.id)}>
                    {cocktail.name}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default SearchPage;