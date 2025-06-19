type Props = {
	name?: string;
	cost?: number;
	children?: any;
};

function Xin({ name = "Unrelenting Spirit", cost = 200, children = "For each 心 after 200, take 0.1% less damage (max 80%)." }: Props) {
	return (
		<>
			<div className="row-header">
				<b>Xin (心)</b>
			</div>
			<center>
				<img src="/icons/status_effects/xin.png" style={{ width: "128px" }} />
				<p>
					<b>{name}</b>
				</p>
				<p style={{ textAlign: "left" }}>
					Activates at <span style={{ color: "#f77", fontWeight: "bold" }}>{cost}心</span>.
					<br />
					{children}
				</p>
			</center>
		</>
	);
}

export default Xin;
