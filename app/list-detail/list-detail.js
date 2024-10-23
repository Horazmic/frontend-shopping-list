'use client'

import { useState } from 'react';

const mockShoppingList = {
  id: 1,
  name: "Weekly Groceries",
  items: [
    { id: 1, name: "Mléko", quantity: 1, unit: "litr" },
    { id: 2, name: "Chléb", quantity: 2, unit: "ks" },
    { id: 3, name: "Vejce", quantity: 10, unit: "ks" },
    { id: 4, name: "Banány", quantity: 1, unit: "trs" },
    { id: 5, name: "Kuře", quantity: 1, unit: "kg" },
  ]
};

export default function ListDetail() {
  const [shoppingList, setShoppingList] = useState(mockShoppingList);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // save to server
  };

  const handleNameChange = (e) => {
    setShoppingList({ ...shoppingList, name: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      {isEditing ? (
        <input
          type="text"
          value={shoppingList.name}
          onChange={handleNameChange}
          className="text-2xl font-bold mb-4 border-b-2 border-blue-500 focus:outline-none"
        />
      ) : (
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold mr-4">{shoppingList.name}</h1>
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
        </div>
      )}
      {isEditing ?
        <button onClick={handleSave} className="bg-green-500 text-white px-4 py-1 rounded">Save</button>
      : null}
      <ul className="space-y-2">
        {shoppingList.items.map((item) => (
          <li key={item.id} className="flex items-center bg-white p-3 rounded shadow">
            <span className="font-bold flex-grow">{item.name}</span>
            <span className="mx-2">{item.quantity}</span> 
            <span className="mr-4">{item.unit}</span>
            <div className="flex gap-2">
              <button className="bg-red-500 text-white px-4 py-1 rounded-md font-bold hover:bg-red-600 transition duration-300">Remove</button>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 transition duration-300">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}    