type Props = {
	name?: string;
	low_morale?: any;
	panic?: any;
};

function Panic({
	name = "Overwhelmed",
	low_morale = "Lose 2 Dice Power.",
	panic = "Cannot act for 1 turn, then recover from Panic at the end of the turn.",
}: Props) {
	return (
		<>
			<div className="row-header">
				<b>Panic</b>
			</div>
			<center>
				<img src="/icons/status_effects/panic.png" style={{ width: "128px" }} />
				<p>
					<b>{name}</b>
				</p>
				<p style={{ textAlign: "left" }}>
					<b style={{ color: "#00aaff" }}>Low Morale:</b> {low_morale} <br />
					<b style={{ color: "#9999ff" }}>Panic:</b> {panic}
				</p>
			</center>
		</>
	);
}

export default Panic;
