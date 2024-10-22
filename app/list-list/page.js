'use client'
import ShoppingListCard from './list-card';
    
const mockShoppingLists = [
    { id: 1, name: "Weekly Groceries", itemCount: 15, owner: "Jana Nováková" },
    { id: 2, name: "Birthday Party Supplies", itemCount: 8, owner: "Petr Svoboda" },
    { id: 3, name: "Office Supplies", itemCount: 5, owner: "Martina Dvořáková" },
    { id: 4, name: "Camping Trip", itemCount: 20, owner: "Jiří Procházka" },
    { id: 5, name: "Home Improvement", itemCount: 12, owner: "Eva Kučerová" },
];

export default function ListListPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockShoppingLists.map(list => (
                <ShoppingListCard key={list.id} list={list} />
            ))}
        </div>
    );
}