import "./CombatUnitModule.css";
import Panic from "../../components/CharacterStuff/Panic";
import Passive from "../../components/CharacterStuff/Passive";
import Skill, { Dice } from "../../components/CharacterStuff/Skill";
import Xin from "../../components/CharacterStuff/Xin";

function CombatUnitModule() {
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="div-table flex-grow-1">
					<div className="row-header">Enemy Name</div>
					<center>
						<img src="/assets/placeholder_man.png" style={{ width: "50%", maxWidth: "256px" }} />
					</center>
					<div className="row-header">
						<b>Vitality</b>
					</div>
					<div className="row">
						<div>Level</div>
						<div>HP</div>
						<div>SR</div>
						<div>Speed</div>
						<div>Slots</div>
					</div>
					<div className="row alt">
						<div>1</div>
						<div>100</div>
						<div>50</div>
						<div>1~3</div>
						<div>1</div>
					</div>
					<div className="row-header">
						<b>Stats</b>
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
						<div>0</div>
						<div>0</div>
						<div>0</div>
						<div>0</div>
						<div>0</div>
						<div>0</div>
					</div>
					<div className="row-header">
						<b>Resistances and Weaknesses</b>
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
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
					</div>
					<Panic />
					<Xin />
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
						<Passive name="Passive Name">This is a description.</Passive>
					</div>
				</div>
			</div>
		</>
	);
}

export default CombatUnitModule;
