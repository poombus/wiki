type Props = {
	name: string;
	children?: any;
};

function Passive({ name = "Passive Name", children = "Passive Description." }: Props) {
	return (
		<>
			<div className="passive-name">{name}</div>
			<p>{children}</p>
		</>
	);
}

export default Passive;
