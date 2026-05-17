import Dashboard from "./Dashboard";
import { UserProvider } from "./UserContext";

export default function App() {
    return (
        <UserProvider>
            <Dashboard />
        </UserProvider>
    );
}