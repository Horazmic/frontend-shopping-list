'use client'
import { useState } from 'react';
import ItemCard from './item-card';

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
  const [isEditingListName, setIsEditingListName] = useState(false);
  const [isEditingItem, setIsEditingItem] = useState(false);

  const handleEditListName = () => {
    setIsEditingListName(true);
  };

  const handleSaveListName = () => {
    setIsEditingListName(false);
    // TODO: Implement server-side save functionality
  };

  const handleNameChange = (e) => {
    setShoppingList({ ...shoppingList, name: e.target.value });
  };

  const handleQuantityChange = (e) => {
    setShoppingList({ ...shoppingList, quantity: e.target.value });
  };

  const handleSaveItem = () => {
    setIsEditingItem(false);
  };

  const handleEditItem = () => {
    setIsEditingItem(true);
  };

  return (
    <div className="container mx-auto p-4">
      {/* List name editing section */}
      {isEditingListName ? (
        <div className="">
          <input
            type="text"
            value={shoppingList.name}
            onChange={handleNameChange}
            className="text-2xl font-bold mb-4 border-blue-500 focus:outline-none underline"
            />
          <button onClick={handleSaveListName} className="text-lg bg-green-500 text-white px-4 py-1 rounded font-bold hover:bg-green-600 transition duration-300">Save</button>
        </div>
      ) : (
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold mr-4">{shoppingList.name}</h1>
          <button onClick={handleEditListName} className="bg-blue-500 text-white px-4 py-1 rounded font-bold hover:bg-blue-600 transition duration-300">Edit</button>
        </div>
      )}
      {/* Shopping list items */}
      <ul key={shoppingList.id} className="space-y-2">
        {shoppingList.items.map((item) => (
          <div className="flex-grow flex justify-between bg-white p-3 rounded shadow">
            {isEditingItem ? (
                <>
                    <input type="text" value={item.name} onChange={(e) => handleNameChange(e.target.value)} className="flex-grow font-bold border-2 border-blue-500 rounded p-1 mr-2" />
                    <input type="text" value={item.quantity} onChange={(e) => handleQuantityChange(e.target.value)} className="flex-grow border-2 border-blue-500 rounded p-1" />
                </>
            ) : (
                <>
                    <span className="font-bold flex-grow text-lg rounded p-1">{item.name}</span>
                    <span className="mr-8 text-lg rounded p-1">{item.quantity} {item.unit}</span>
                </>
            )}  
            <div className="flex gap-2">
                {isEditingItem ? (
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 transition duration-300" onClick={handleSaveItem}>Save</button>
            ) : (
                <>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-md font-bold hover:bg-red-600 transition duration-300">Remove</button>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 transition duration-300" onClick={handleEditItem}>Edit</button>
                </>
              )}
            </div>
          </div>  
        ))}
      </ul>
    </div>
  );
}    