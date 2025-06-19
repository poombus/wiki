type Props = {
	name?: string;
	damage_type?: "blunt" | "slash" | "pierce";
	element_type?: "normal" | "frost" | "fire" | "electric" | "necrotic" | "poison" | "psychic" | "radiant";
	effect?: any;
	dice?: [...any];
};

type DiceProps = {
	roll?: [number, number];
	type?: "melee" | "ranged" | "guard" | "evade";
	effect?: any;
};

function Skill({ name = "Skill Name", damage_type = "blunt", element_type = "normal", effect, dice = [<Dice />] }: Props) {
	return (
		<div className="skill">
			<div className="name" style={{ backgroundColor: `var(--element-${element_type})` }}>
				{name} <img src={`icons/damage_types/${damage_type}.png`} className="damage-icon" />
				{element_type != "normal" && <img src={`icons/damage_types/${element_type}.png`} className="damage-icon" />}
			</div>
			{effect && (
				<>
					<p>{effect}</p>
					<hr />
				</>
			)}

			{dice}
		</div>
	);
}

export function Dice({ roll = [1, 1], type = "melee", effect = "No effect." }: DiceProps) {
	return (
		<div className="d-flex" style={{ backgroundColor: "#666" }}>
			<div style={{ width: "40px", backgroundColor: "#444" }}>
				<img src={`icons/dice_types/${type}.png`} style={{ width: "20px" }} /> <br />
				{Math.min(roll[0], roll[0] + roll[1])}~{Math.max(roll[0], roll[0] + roll[1])}
			</div>
			<p style={{ margin: "auto", marginLeft: "8px" }}>{effect}</p>
		</div>
	);
}

export default Skill;
