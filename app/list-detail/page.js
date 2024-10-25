'use client'
import ListDetail from './list-detail';
import UsersDetail from './users.detail';
import { useUser } from '../context/UserContext';

export default function ListDetailPage() {
    const { user } = useUser();
    if (user === null || user === '') {
        return <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-red-600 max-w-2xl px-4">
                Please select a user from the dropdown menu in the header to view users.
            </h1>
        </div>
    }
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-1/2">
                <ListDetail />
            </div>
            <div className="w-1/2">
                <UsersDetail />
            </div>
        </div>
    );
}


