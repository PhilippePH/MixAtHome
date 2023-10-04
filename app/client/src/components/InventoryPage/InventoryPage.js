import React, { Fragment, useEffect, useState } from 'react'

const InventoryPage = () => {
  const [ingredients, setingredients] = useState([])

  const changeStockStatus = async (e, id, in_stock) => {
    console.log(e, id, in_stock)
    e.preventDefault();
    try {
      const value = {in_stock}
      const response = await fetch(
        `http://localhost:5000/inventory/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value)
        }
      );

      window.location = "/inventory";
    } catch (err) {
      console.error(err.message)
    }
}


  const getingredients = async () => {
    try {
      const response = await fetch("http://localhost:5000/inventory");
      const jsonData = await response.json();

      setingredients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getingredients();
  }, []);

  return (
    <div className="Search">
      <h1 className='text-center mt-5'> Inventory </h1>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>In Stock?</th>
            <th>Change Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(ingredient =>(
            <tr key={ingredient.id}>
              <td>{ingredient.name}</td>
              <td>{ingredient.in_stock ? 'Yes' : 'No'}</td>
              <td>
                <button class="btn btn-secondary"
                onClick={e => changeStockStatus(e, ingredient.id, ingredient.in_stock)}>
                  Change</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryPage;