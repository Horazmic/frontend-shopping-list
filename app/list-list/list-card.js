import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ShoppingListCard({ list }) {
    const router = useRouter();
    const handleListClick = () => {
        router.push(`/list-detail`);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer " onClick={() => handleListClick()}>
            <div className="mb-1">
                <h3 className="text-xl font-semibold mb-2">{list.name}</h3>
                <p className="text-gray-600">Items: {list.itemCount}</p>
                <p className="text-gray-600">Owner: {list.owner}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300 mt-1">
                View Details
            </button>
        </div>
    );
}   