import React, { Fragment, useEffect, useState } from 'react'

const InventoryPage = () => {
  const [in_stock, set_in_stock] = useState([])
  const [no_stock, set_no_stock] = useState([])

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
      document.location.reload(false) // this keeps the position of the user on the page when reloading

    } catch (err) {
      console.error(err.message)
    }
}


  const getingredients = async () => {
    try {
      const in_stock = await fetch("http://localhost:5000/inventory/in-stock");
      const out_of_stock = await fetch("http://localhost:5000/inventory/no-stock");
      
      const in_stock_json = await in_stock.json();
      const no_stock_json = await out_of_stock.json();

      set_in_stock(in_stock_json);
      set_no_stock(no_stock_json);
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
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>In Stock?</th>
            <th>Change Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {in_stock.map(ingredient =>(
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

      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>In Stock?</th>
            <th>Change Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {no_stock.map(ingredient =>(
            <tr key={ingredient.id}>
              <td>{ingredient.name}</td>
              <td>{ingredient.in_stock ? 'Yes' : 'No'}</td>
              <td>
                <button className="btn btn-secondary"
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