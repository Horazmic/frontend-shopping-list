import ListDetail from './list-detail';
import UsersDetail from './users.detail';

export default function ListDetailPage() {
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


