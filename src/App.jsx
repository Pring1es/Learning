import "./App.css";
import { useState } from "react";
import UserProfile from "./components/UserProfile.jsx";
import UserContext from "./contexts/UserContext.jsx";

function App() {
	const [isOnline, setIsOnline] = useState(true);
	return (
		<UserContext.Provider
			value={{ isOnline: isOnline, setIsOnline: setIsOnline }}
		>
			<UserProfile />
		</UserContext.Provider>
	);
}

export default App;
