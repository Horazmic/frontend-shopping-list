import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ItemCard({ firstRow, secondRow }) {

    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing(true);
        setFirstRow(fi);
    }

    const handleSave = () => {
        setIsEditing(false);
    }

    return (
        // item card
        <div className="flex-grow flex justify-between bg-white p-3 rounded shadow">
            {isEditing ? (
                <>
                    <input type="text" value={firstRow} onChange={(e) => setFirstRow(e.target.value)} className="flex-grow font-bold border-2 border-blue-500 rounded p-1 mr-2" />
                    <input type="text" value={secondRow} onChange={(e) => setSecondRow(e.target.value)} className="flex-grow border-2 border-blue-500 rounded p-1" />
                </>
            ) : (
                <>
                    <span className="font-bold flex-grow text-lg rounded p-1">{firstRow}</span>
                    <span className="mr-8 text-lg rounded p-1">{secondRow}</span> 
                </>
            )} 
            <div className="flex gap-2">
                {isEditing ? (
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 transition duration-300" onClick={handleSave}>Save</button>
                ) : (
                    <>
                        <button className="bg-red-500 text-white px-4 py-1 rounded-md font-bold hover:bg-red-600 transition duration-300">Remove</button>
                        <button className="bg-blue-500 text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 transition duration-300" onClick={handleEdit}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
}