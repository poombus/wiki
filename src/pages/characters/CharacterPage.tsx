import { createElement, useEffect, useState, type ComponentType, type JSX } from "react";
import TabContainer, { Tab } from "../../components/Tab/TabContainer";
import { Navigate, Route, Routes, useParams } from "react-router";

const pages = import.meta.glob("./*/**/*.tsx", { eager: true });

export default function CharacterPage() {
	const { name } = useParams();
	const [charName, setCharName] = useState("");
	const [routes, setRoutes] = useState<JSX.Element[]>([]);
	const [indexRoute, setIndexRoute] = useState("overview");
	useEffect(() => {
		if (routes.length <= 0) return;
		for (let r of routes) {
			if (r.key != "overview") continue;
			setIndexRoute("overview");
			return;
		}
		setIndexRoute(routes[0].key as string);
		console.log(`Overview page not found... ${routes[0].key} is the index page now.`);
	}, [routes]);
	useEffect(() => {
		let r = getCharacterRoutes(name);
		setRoutes(r);
	}, [name]);

	const getCharacterRoutes = (name?: string) => {
		if (!name) return [];
		name = name.toLowerCase();
		const prefix = `/${name}`;
		const matchingPages = Object.entries(pages).filter(([path]) => {
			return path.toLowerCase().includes(`${prefix}/`.toLowerCase());
		});
		if (matchingPages.length > 0) {
			let path = matchingPages[0][0];
			let ind = path.toLowerCase().indexOf(name);
			setCharName(path.slice(ind, ind + name.length));
		}
		return matchingPages.map(([path, mod]) => {
			const component = (mod as { default: ComponentType<any> }).default;

			// Extract the subpath from filename (e.g. Overview.tsx → "")
			const subPath = path
				.toLowerCase()
				.replace(/^.*\/characters\/[^/]+\//, "") // Remove prefix
				.replace(/\.tsx$/, "") // Remove extension
				.replace(/index$/, "") // Treat index.tsx as root
				.replace(`.${prefix}/`, "");
			const finalPath = subPath || ""; // Root page

			//console.log("Found Page! ... ", finalPath);
			return <Route key={subPath || "root"} path={finalPath} element={createElement(component)} />;
		});
	};

	return (
		<>
			<h1 className="headline">{charName}</h1>
			{routes.length > 1 && (
				<TabContainer>
					<Tab label="Overview" href={`/characters/${name}/overview`} />
					<Tab label="Combat" href={`/characters/${name}/combat`} />
				</TabContainer>
			)}

			<Routes>
				<Route index element={<Navigate to={indexRoute} replace />} />
				<Route path="*" element={<div>404 not found :(</div>} />
				{routes}
			</Routes>
		</>
	);
}
