import { useAppContext } from "../context/AppContext";

export default function Header() {
    const { user } = useAppContext();

    return (
        <div className="flex w-full">
            <h1>Tennis league</h1>

            <div className="flex flex-1 justify-end">
                <ul className="flex space-x-4">
                    <li>{user?.first_name} {user?.last_name}</li>
                    <li>{user?.role}</li>
                </ul>
            </div>
        </div>
    );
}
