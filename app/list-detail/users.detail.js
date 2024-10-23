'use client'
import { useState } from 'react';
import { useUser } from '../context/UserContext';

const mockUsers = [
  { id: 1, name: "Jana Nováková", role: "Owner" },
  { id: 2, name: "Petr Svoboda", role: "Member" },
  { id: 3, name: "Martina Dvořáková", role: "Member" },
  { id: 4, name: "Jiří Procházka", role: "Member" },
  { id: 5, name: "Eva Kučerová", role: "Member" },
];

export default function UsersDetail() {
    const { user } = useUser();
    const [users, setUsers] = useState(mockUsers);
   
    if (user === null || user === '') {
      return (
          <div className="flex items-center justify-center h-screen bg-gray-100">
              <h1 className="text-4xl font-bold text-center text-red-600 max-w-2xl px-4">
                  Please select a user from the dropdown menu in the header to view users.
              </h1>
          </div>
      );
    }

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <ul className="space-y-2">
          {users.map((item) => (
            <li key={item.id} className="flex justify-center items-center bg-white p-3 rounded shadow">
              <span className="flex-grow">{item.name}</span>
              <span className="mr-4">{item.role}</span>
              <button className="bg-red-500 text-white px-4 py-1 rounded-md font-bold hover:bg-red-600 transition duration-300">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }    