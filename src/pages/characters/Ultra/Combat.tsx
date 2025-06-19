import "../../../template_pages/character/CombatUnitModule.css";
import Panic from "../../../template_pages/character/components/Panic";
import Passive from "../../../template_pages/character/components/Passive";
import Skill, { Dice } from "../../../template_pages/character/components/Skill";

function CombatUnitModule() {
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="div-table flex-grow-1">
					<div className="row-header">Ultra</div>
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
						<div>0</div>
						<div>0</div>
						<div>+5</div>
						<div>+3</div>
						<div>+5</div>
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
						<div>x2.0</div>
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
						<div>x0.7</div>
						<div>x1.0</div>
						<div>x0.0</div>
						<div>x1.0</div>
						<div>x1.0</div>
					</div>
					<Panic
						name="Suicidal"
						low_morale={
							"Does not act the turn this unit reaches Low Morale for the first time. \
							Even if this character's sanity rises above -50, they will not lose this Low Morale effect \
							for the rest of combat."
						}
						panic={
							"Cannot act for 3 Turns. If the character hasn't recovered from Panic before then, \
							the character dies on turn start and all allies lose 10 sanity. If the character Panics a 2nd time, \
							they will die at the start of the next turn."
						}
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
						<Passive name="Piston Heart">At the start of each turn, gain 0x1 Charge.</Passive>
					</div>
				</div>
			</div>
		</>
	);
}

export default CombatUnitModule;
