//import { createElement, type ComponentType } from "react";
import { HashRouter, Route, Routes } from "react-router"; //HashRouter because Github pages no likey BrowserRouter
import Home from "./pages/Home";
import CharacterPage from "./pages/characters/CharacterPage";

export default function App() {
	return (
		<>
			<a href="/">Home</a>
			<HashRouter>
				<Routes>
					{/*getRoutes()*/}
					<Route path="/" element={<Home />} />
					<Route path="/characters/:name/*" element={<CharacterPage />} />
					<Route path="*" element={<div>404 not found :(</div>} />
				</Routes>
			</HashRouter>
		</>
	);
}
