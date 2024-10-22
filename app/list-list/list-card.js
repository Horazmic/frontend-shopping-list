import Link from 'next/link';

export default function ShoppingListCard({ list }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{list.name}</h3>
            <p className="text-gray-600">Items: {list.itemCount}</p>
            <p className="text-gray-600">Owner: {list.owner}</p>
            {/* todo add href by id */}
            <Link href={`/list-detail`} className="text-blue-500 hover:underline mt-2 inline-block">
                View Details
            </Link>
        </div>
    );
}