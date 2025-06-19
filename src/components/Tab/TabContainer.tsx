import { useMatch, useNavigate } from "react-router-dom";
import "./TabContainer.css";

type TabContainerProps = {
	children?: any;
};

type TabProps = {
	label: string;
	href?: string;
};

function TabContainer({ children }: TabContainerProps) {
	return <div className="info-tab d-flex justify-content-between">{children}</div>;
}

export function Tab({ label, href = "" }: TabProps) {
	const navigate = useNavigate();
	const match = useMatch(href);

	return (
		<div className={match ? "active-tab" : "inactive-tab"} onClick={() => navigate(href)}>
			{label}
		</div>
	);
}

export default TabContainer;
