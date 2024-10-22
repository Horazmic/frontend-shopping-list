'use client'

import { useState } from 'react';

const mockShoppingList = {
  id: 1,
  name: "Weekly Groceries",
  items: [
    { id: 1, name: "Milk", quantity: 1, unit: "gallon" },
    { id: 2, name: "Bread", quantity: 2, unit: "loaf" },
    { id: 3, name: "Eggs", quantity: 1, unit: "dozen" },
    { id: 4, name: "Bananas", quantity: 1, unit: "bunch" },
    { id: 5, name: "Chicken", quantity: 2, unit: "lbs" },
  ]
};

export default function ListDetail() {
  const [shoppingList, setShoppingList] = useState(mockShoppingList);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{shoppingList.name}</h1>
      <ul className="space-y-2">
        {shoppingList.items.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <span>{item.name}</span>
            <span>{item.quantity} {item.unit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}    