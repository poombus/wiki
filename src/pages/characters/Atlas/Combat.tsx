import "../../../template_pages/character/CombatUnitModule.css";
import Panic from "../../../components/CharacterStuff/Panic";
import Passive from "../../../components/CharacterStuff/Passive";
import Skill, { Dice } from "../../../components/CharacterStuff/Skill";
import Xin from "../../../components/CharacterStuff/Xin";

export default function Combat() {
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="div-table flex-grow-1">
					<div className="row-header">Atlas</div>
					<center>
						<img src="/assets/placeholder_man.png" style={{ width: "50%", maxWidth: "256px" }} />
					</center>
					<div className="row-header">
						<b>Base Stats</b>
					</div>
					<div className="row">
						<div>STR</div>
						<div>DEX</div>
						<div>CON</div>
						<div>INT</div>
						<div>WIS</div>
						<div>CHA</div>
					</div>
					<div className="row alt">
						<div>-2</div>
						<div>0</div>
						<div>0</div>
						<div>+3</div>
						<div>+5</div>
						<div>0</div>
					</div>
					<div className="row-header">
						<b>Base Resistances and Weaknesses</b>
					</div>
					<div className="row">
						<div>
							<img src="/icons/damage_types/slash.png" style={{ height: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/blunt.png" style={{ width: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/pierce.png" style={{ width: "30px" }} />
						</div>
					</div>
					<div className="row alt">
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
					</div>
					<div className="row">
						<div>
							<img src="/icons/damage_types/frost.png" style={{ height: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/fire.png" style={{ width: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/electric.png" style={{ width: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/necrotic.png" style={{ width: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/poison.png" style={{ width: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/psychic.png" style={{ width: "30px" }} />
						</div>
						<div>
							<img src="/icons/damage_types/radiant.png" style={{ width: "30px" }} />
						</div>
					</div>
					<div className="row alt">
						<div>x1.0</div>
						<div>x2.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
					</div>
					<Panic
						name="Agitated"
						low_morale={"Gain 2 Damage Up and 4 Fragile on turn start."}
						panic={"Gain 4 Damage Up and 10 Fragile on turn start."}
					/>
					<Xin name="Force of a Wildfire" cost={500}>
						At the end of each turn, all units gain 1x0 Burn for every 10心 after activation.
					</Xin>
				</div>
				<div className="sap div-table flex-grow-1">
					<div className="row-header">Skills</div>
					<div className="skill-list">
						<Skill name="Example Skill" dice={[<Dice roll={[3, 3]} type="ranged" />]} />
						<Skill
							name="Example Skill"
							dice={[<Dice roll={[3, 3]} type="evade" />, <Dice roll={[3, 6]} />, <Dice roll={[3, 3]} type="guard" />]}
						/>
					</div>
					<div className="row-header">Passives</div>
					<div className="passive-list">
						<Passive name="Fear of Fire">When this unit takes Fire damage, lose 1 Sanity for every 5 damage (rounded up).</Passive>
					</div>
				</div>
			</div>
		</>
	);
}
