import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserProfile() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Theme Preference: {user.themePreference}</p> 
        </div>
    );
}

