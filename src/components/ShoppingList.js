import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, updateSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredText, setFilteredText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.toLowerCase().includes(filteredText.toLowerCase())
  });

  function handleFilteredText(e) {
    console.log(e.target.value)
    setFilteredText(e.target.value);
  }



  // const filteredItems = items.filter((item) => {
  //   if ()
  // })

  return (
    <div className="ShoppingList">
      <ItemForm update={updateSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onFilteredText={handleFilteredText}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
