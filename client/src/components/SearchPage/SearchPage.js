import React, { Fragment, useEffect, useState, useRef } from 'react';
import { json, useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const openCocktailPage = (id) => {
    navigate(`/cocktails/${id}`, { replace: true });
  };

  const [cocktails, setCocktails] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleEnterKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await searchResult();
          setSearchText('');
    }
  };

//   const handleEnterKeyPress = (event) => {
//   if (event.key === 'Enter') {
//     event.preventDefault(); // Prevent the default Enter behavior (e.g., adding a line in a textarea)
//     searchResult()
//       .then(() => {
//         // Clear the input field after searching
//         setSearchText('');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// };


  const searchResult = async () => {
    try {
      if (!searchText) {
        return;
      }
      const response = await fetch(`http://localhost:5000/cocktails/search/${searchText}`);
      const jsonData = await response.json();
      console.log(jsonData)
      if (Array.isArray(jsonData)) {
        setCocktails(jsonData);
      } else {
        setCocktails([jsonData]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAllCocktails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/cocktails`);
      const jsonData = await response.json();
      
      setCocktails(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   console.log(cocktails);
  // }, [cocktails]);

  // useEffect(() => {
  //   // This effect runs when the component first mounts
  //   searchResult();
  // }, [searchText]); // Add searchText as a dependency to trigger on searchText change

  useEffect(() => {
    getAllCocktails();
  }, []);

  return (
    <Fragment>
      <h1 className='text-center mt-5'> Search here </h1>
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="input-group col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a cocktail name"
              aria-label="CocktailName"
              aria-describedby="basic-addon2"
              ref={inputRef} // when empty, i should be returning all the values again  
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleEnterKeyPress}
            />
          </div>
          <div className="input-group-append col">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => searchResult()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Cocktail Name</th>
          </tr>
        </thead>
        <tbody>
          { Array.isArray(cocktails) ? (
            cocktails.map(cocktail => (
            <tr key={cocktail.id}>
              <td>
                <button type="button" className="btn btn-light btn-lg w-100" onClick={() => openCocktailPage(cocktail.id)}>
                  {cocktail.name}
                </button>
              </td>
            </tr>
            ))
          ) : (
            (
            <tr>
              <td>No cocktails found</td>
            </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default SearchPage;
