import "../../../template_pages/character/CombatUnitModule.css";
import Panic from "../../../template_pages/character/components/Panic";
import Passive from "../../../template_pages/character/components/Passive";
import Skill, { Dice } from "../../../template_pages/character/components/Skill";

function CombatUnitModule() {
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="div-table flex-grow-1">
					<div className="row-header">Boughb</div>
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
						<div>+3</div>
						<div>0</div>
						<div>+10</div>
						<div>-3</div>
						<div>-5</div>
						<div>-5</div>
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
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x2.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x0.5</div>
					</div>
					<Panic
						name="Revenge"
						low_morale={"Lose 3 Constitution and 6 Damage Up next turn."}
						panic={"Gain 6 Constitution Down and 10 Damage Up next turn."}
					/>
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
						<Passive name="Sadism">Whenever a unit is hit and they take 20+ damage, gain 1 Sanity.</Passive>
					</div>
				</div>
			</div>
		</>
	);
}

export default CombatUnitModule;
