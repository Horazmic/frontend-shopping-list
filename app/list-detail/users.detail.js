'use client'
import { useState } from 'react';
import ItemCard from './item-card'; 

const mockUsers = [
  { id: 1, name: "Jana Nováková", role: "Owner" },
  { id: 2, name: "Petr Svoboda", role: "Member" },
  { id: 3, name: "Martina Dvořáková", role: "Member" },
  { id: 4, name: "Jiří Procházka", role: "Member" },
  { id: 5, name: "Eva Kučerová", role: "Member" },
];

export default function UsersDetail() {
    const [users, setUsers] = useState(mockUsers);

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
          <ul className="space-y-2">
            {users.map((item) => (  
              <ItemCard key={item.id} firstRow={item.name} secondRow={item.role} />
            ))}
          </ul>
      </div>
    );  
}    