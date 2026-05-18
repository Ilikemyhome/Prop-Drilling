# Prop-Drilling
This project demonstrates how to refactor a prop‑drilled React application into a clean, scalable architecture using the **React Context API** and the **useContext hook**. The goal is to eliminate unnecessary prop passing through multiple component layers and centralize shared state in a Context Provider.

## Test cases
Test Case 1 — UserProfile displays correct default user
Expected:  
Name, email, and themePreference appear correctly.

Test Case 2 — Updating user state updates UI everywhere
Add a button in Dashboard to update the user:

jsx
const { setUser } = useContext(UserContext);
setUser(prev => ({ ...prev, name: "Updated Name" }));
Expected:  
UserProfile updates instantly without props.

Test Case 3 — Removing prop drilling does not break intermediate components
Expected:  
Dashboard and Sidebar render normally with no props.

### Edge Cases
Edge Case 1 — user is null
Temporarily set:

jsx
const [user, setUser] = useState(null);
Expected:  
UserProfile handles missing data gracefully (e.g., “No user loaded”).

Edge Case 2 — Missing fields
Set:

jsx
name: "",
email: "",
themePreference: ""
Expected:  
UI shows empty values without crashing.

Edge Case 3 — Context consumer used outside provider
Temporarily remove <UserProvider> from App.jsx.

Expected:  
React throws a clear error:
“Cannot read properties of undefined (reading 'user')”

This proves your architecture depends on the provider.
