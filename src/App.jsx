import { useState } from "react";

import MovieList from "./components/MovieList";
import MovieContext from "./contexts/MovieContext";

function App() {
	const [movies, setMovies] = useState([
		{
			movie_id: 1,
			title: "Memento",
			release_year: 200,
		},
		{
			movie_id: 2,
			title: "Zootopie",
			release_year: 2016,
		},
		{
			movie_id: 3,
			title: "charlie et la chocolaterie",
			release_year: 2005,
		},
	]);

	return (
		<MovieContext.Provider value={{ movies: movies }}>
			<MovieList />
		</MovieContext.Provider>
	);
}

export default App;
