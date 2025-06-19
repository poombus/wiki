import { createElement, type ComponentType } from "react";
import TabContainer, { Tab } from "../../components/Tab/TabContainer";
//import CombatUnitModule from "./CombatUnitModule";
import CombatUnitModule from "../../pages/characters/Klaus/Combat";
import OverviewModule from "./OverviewModule";
import { HashRouter, Route, Routes } from "react-router";

export default function CharacterTemplatePage() {
	return (
		<>
			<h1 className="headline">Guy</h1>
			<HashRouter>
				<Routes>
					<Route
						path="/*"
						element={
							<>
								<TabContainer>
									<Tab label="Overview" href="/" />
									<Tab label="Enemy" href="/enemy" />
								</TabContainer>
							</>
						}
					/>
				</Routes>
				<Routes>
					{getRoutes()}
					<Route path="" element={<OverviewModule />} />
					<Route path="/enemy" element={<CombatUnitModule />} />
				</Routes>
			</HashRouter>
		</>
	);
}

function getRoutes() {
	const pages = import.meta.glob("./pages/characters/**/*.tsx", { eager: true });
	const routes = Object.entries(pages).map(([path, module]) => {
		const component = (module as { default: ComponentType<any> }).default;

		const routePath =
			path
				.replace("./pages/characters", "") // remove base folder
				.replace(/\/?index\.tsx$/, "") // remove index.tsx at end
				.replace(/\.tsx$/, "") // remove file extension
				.replace(/\[(\w+)\]/g, ":$1") // convert [param].tsx → :param
				.toLowerCase() || "/"; // root path fallback
		console.log(`Found page! ... ${routePath}`);

		return <Route key={routePath || "/"} path={`/${routePath.toLocaleLowerCase()}`} element={createElement(component)} />;
	});
	return routes;
}
