import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
	const { isOnline, setIsOnline } = useContext(UserContext);
	return (
		<>
			{isOnline ? <p>User is Online</p> : <p>User is Offline</p>}

			<button
				type="button"
				onClick={() => {
					setIsOnline(!isOnline);
				}}
			>
				click to change user status
			</button>
		</>
	);
}

export default UserProfile;
