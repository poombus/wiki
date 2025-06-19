type Props = {
	children?: string;
	whitelist?: string[];
	perms?: number;
};

function Censor({ children, whitelist = [] }: Props) {
	const finalText = () => {
		let wl = whitelist.concat(["of", "a", "the", "at", "as", "and", "to", "his", "her", "their", "he", "she", "him", "them", "they"]);
		let t = children || "";
		const parts: string[] = [];

		let sInd: number;
		let eInd: number;
		while ((sInd = t.indexOf("[s]")) != -1 && (eInd = t.indexOf("[/s]")) != -1) {
			const before = t.slice(0, sInd);
			const skipped = t.slice(sInd + "[s]".length, eInd);
			const after = t.slice(eInd + "[/s]".length);
			parts.push(
				before.replace(/\b[a-zA-Z]+\b/g, (word) => {
					return wl.includes(word.toLowerCase()) ? word : word.replace(/[a-zA-Z]/g, "\u2588");
				})
			);
			parts.push(skipped);
			t = after;
		}
		console.log(wl);
		parts.push(
			t.replace(/\b[a-zA-Z]+\b/g, (word) => {
				return wl.includes(word.toLowerCase()) ? word : word.replace(/[a-zA-Z]/g, "\u2588");
			})
		);

		return parts.join("");
	};
	return <>{finalText()}</>;
}

export default Censor;
