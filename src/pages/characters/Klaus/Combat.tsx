import "../../../template_pages/character/CombatUnitModule.css";
import Panic from "../../../template_pages/character/components/Panic";
import Passive from "../../../template_pages/character/components/Passive";
import Skill, { Dice } from "../../../template_pages/character/components/Skill";
import Xin from "../../../template_pages/character/components/Xin";

function CombatUnitModule() {
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="div-table flex-grow-1">
					<div className="row-header">Klaus</div>
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
						<div>+5</div>
						<div>-3</div>
						<div>0</div>
						<div>0</div>
						<div>+5</div>
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
						<div>x0.5</div>
						<div>x1.0</div>
						<div>x2.5</div>
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
						<div>x2.0</div>
					</div>
					<Panic
						name="Manic"
						low_morale={"Gain 2 Damage Up on turn start. All allies (including self) lose 5 sanity on turn end."}
						panic={
							"Gain 5 Damage Up on turn start. At the start of each turn, one Speed Dice will have “Manic Episode” slotted and targeting a random ally."
						}
					/>
					<Xin name="Eyes That Can See Death" cost={500}>
						<p>
							For every 50心 after activation, increase the Slash weakness of all targets by +0.1 when this unit deals damage with a
							melee dice, including those who are immune to Slash damage.
						</p>
						<p>At the end of each turn, this unit loses 1 Sanity for every 25心 after activation.</p>
						<p>Cannot be deactivated.</p>
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
						<Passive name="Opportunist">For each turn that this unit hasn't taken damage, increase damage by 5% (max 25%).</Passive>
					</div>
				</div>
			</div>
		</>
	);
}

export default CombatUnitModule;
