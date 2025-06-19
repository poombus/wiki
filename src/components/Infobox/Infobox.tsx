import { useState } from "react";
import "./Infobox.css";

type BoxProps = {
	title?: string;
	children?: any;
	width?: string;
};

type EntryProps = {
	name: string;
	children?: any;
};

type ImageProps = {
	image_path: string;
	width?: string;
};

function Infobox({ title = "Example Title", children, width }: BoxProps) {
	return (
		<div className="info-box" style={{ width: width }}>
			{title != "" && <h3 className="title">{title}</h3>}
			{children}
		</div>
	);
}

export function InfoEntry({ name, children }: EntryProps) {
	return (
		<div className="entry d-flex">
			<div className="name">{name}</div>
			<div className="value flex-fill">{children}</div>
		</div>
	);
}

export function InfoHiddenEntry({ name, children }: EntryProps) {
	const [hidden, setHidden] = useState(true);

	return (
		<div className="entry d-flex">
			<div className="name">{name}</div>
			<div className="value flex-fill">{!hidden && children}</div>
			<div className="hide-button user-select-none">
				[
				<span className="text" onClick={() => setHidden(!hidden)}>
					{hidden ? "Reveal" : "Hide"}
				</span>
				]
			</div>
		</div>
	);
}

export function InfoImage({ image_path, width = "100%" }: ImageProps) {
	return (
		<center>
			<img src={image_path} alt={image_path} style={{ width: width }}></img>
		</center>
	);
}

export default Infobox;
