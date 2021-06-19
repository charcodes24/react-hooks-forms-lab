import React, { useCallback } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ update }) {

  function handleSubmit(e) {
    e.preventDefault();
   const newItem = {
    id: uuid(), 
    name: e.target[0].value,
    category: e.target[1].value,
  };
  update(newItem)

  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
