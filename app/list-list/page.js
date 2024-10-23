'use client'
import ShoppingListCard from './list-card';
import { useUser } from '../context/UserContext';
import { useState, useEffect } from 'react';

const AddListModal = ({ newListName, setNewListName, newListItems, setNewListItems, handleAddList, onClose }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
            <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Add New List</h3>
                <div className="mt-2 px-7 py-3">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2"
                        placeholder="List Name"
                        value={newListName}
                        onChange={(e) => setNewListName(e.target.value)}
                    />
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Items (comma-separated)"
                        value={newListItems}
                        onChange={(e) => setNewListItems(e.target.value)}
                        rows="3"
                    />
                </div>
                <div className="items-center px-4 py-3">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={handleAddList}
                    >
                        Add List
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default function ListListPage() {
    const { user } = useUser();
    const [showAddListForm, setShowAddListForm] = useState(false);
    const [newListName, setNewListName] = useState('');
    const [newListItems, setNewListItems] = useState('');
    const [shoppingLists, setShoppingLists] = useState([]);

    useEffect(() => {
        const fetchShoppingLists = async () => {
            const mockShoppingLists = [
                { id: 1, name: "Weekly Groceries", itemCount: 15, owner: "1" },
                { id: 2, name: "Birthday Party Supplies", itemCount: 8, owner: "1" },
                { id: 3, name: "Office Supplies", itemCount: 5, owner: "1" },
                { id: 4, name: "Camping Trip", itemCount: 20, owner: "2" },
                { id: 5, name: "Home Improvement", itemCount: 12, owner: "2" },  
            ];
            setShoppingLists(mockShoppingLists);
        };

        fetchShoppingLists();
    }, []);

    const handleAddList = () => {
        if (newListName.trim() !== '') {
            const newList = {
                id: shoppingLists.length + 1,
                name: newListName,
                itemCount: newListItems.split(',').filter(item => item.trim() !== '').length,
                owner: user
            };
            setShoppingLists([...shoppingLists, newList]);
            setNewListName('');
            setNewListItems('');
            setShowAddListForm(false);
        }
    };

    if (user === null || user === '') {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-center text-red-600 max-w-2xl px-4">
                    Please select a user from the dropdown menu in the header to view your shopping lists.
                </h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8 bg">
                {showAddListForm && (
                    <AddListModal 
                        newListName={newListName} 
                        setNewListName={setNewListName} 
                        newListItems={newListItems} 
                        setNewListItems={setNewListItems} 
                        handleAddList={handleAddList}
                        onClose={() => setShowAddListForm(false)}
                    />
                )}
                <h1 className="text-3xl font-bold mb-6">My Shopping Lists</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {shoppingLists.map(list => (
                        list.owner === user && (
                            <ShoppingListCard key={list.id} list={list} />
                        )
                    ))}
                </div>
                <button 
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition duration-300"
                    onClick={() => setShowAddListForm(true)}
                >
                    Add New List
                </button>
            </div>
        </div>
    ); 
}