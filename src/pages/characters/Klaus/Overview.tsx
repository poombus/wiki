import Censor from "../../../components/Censor";
import Infobox, { InfoEntry, InfoHiddenEntry, InfoImage } from "../../../components/Infobox/Infobox";

export default function Overview() {
	return (
		<>
			<Infobox title="Klaus Nightshade">
				<InfoImage image_path="\assets\placeholder_man.png" width="80%"></InfoImage>
				<InfoEntry name="Gender">Male</InfoEntry>
				<InfoEntry name="Occupation">Adventurer</InfoEntry>
				<InfoEntry name="Relations">Alaric and Isolde Nightshade (Parents)</InfoEntry>
				<InfoEntry name="Aliases">
					<Censor>The Bloodfiend</Censor>
				</InfoEntry>
				<InfoHiddenEntry name="Status">Alive</InfoHiddenEntry>
			</Infobox>
			<center>
				<h2 style={{ color: "red" }}>
					<b>NOTICE: </b> This document has been heavily edited by a Patron.
				</h2>
				<h4>
					If you wish to view the unedited file, please contact an Alexadria Representative and submit an inquery about scheduling a Bidding
					Negotiation.
				</h4>
			</center>
			<hr />
			<br />
			<p>
				Klaus Nightshade is a quiet Trueblood Vampire who never seems to let others know what he's thinking. A troubled soul with a memory
				riddled with holes, all he knows is that there is a certain someone he needs to kill in order to avenge his family.
			</p>
			<h2 className="headline">Appearance</h2>
			<p>
				Klaus has unkempt white hair with a singular black highlight. While of pale complexion, his fangs are barely noticable despite his
				Vampirism. Moreover, due to his Trueblood heritage, he doesn't burn in the sunlight nor does he need to feed on human essence.
			</p>
			<p>
				Prefers to use short-bladed weapons, despite having proficiency with almost every type of bladed weapons. He does carry a unique,
				custom-made blade, but has a mental block whenever he or anyone else even thinks about unsheathing it.
			</p>

			<h2 className="headline">Backstory</h2>
			<p>
				Klaus has always had a particulary poor case of amnesia. He has no recollection of events before the age of 13, and even after
				struggles to remember key details of his life.
			</p>

			<p>
				He was born to a Trueblood couple in District <Censor>E</Censor> who were well known "Demon Hunters" in the area and ran an academy
				that trained more hunters. Klaus, being their only child, participated out of obligation and was their biggest focus. He struggled in
				his tutelage and that ended up being his biggest regret.
			</p>

			<p>
				However, before he became a student of the Nightbringer Arts, Klaus was{" "}
				<Censor whitelist={["Klaus"]}>
					born as a child of the Dawnbringer family, a clan of pure-human demon hunters who were known for their undeniable strength and
					excessive brutality. Their "style" of killing demons leads people to wonder if they are demons themselves.
				</Censor>
			</p>

			<p>
				Klaus was raised to be{" "}
				<Censor whitelist={["Klaus"]}>
					the heir of the Dawnbringer family and Klaus was trained very strictly. The clan's efforts began to bear fruit as Klaus' aptitude
					in melee combat was unparalleled even beyond his years. [s]However, Klaus did not want[/s] to be the next heir, due to the
					percieved monotony of managing a clan rather than doing the work himself.
				</Censor>
			</p>

			<p>
				However, on one fateful day, he was presented the opportunity to escape his fate.{" "}
				<Censor whitelist={["Klaus"]}>
					His eldest brother, who had returned from a hunt, had been turned into a Vampire and intended to have the rest of the clan do the
					same, lest they would be killed for refusing. Thus, a civil war broke out between those who wanted to join the Vampire's side and
					those who wanted to remain loyal to the Dawnbringer clan to the end.
				</Censor>
			</p>

			<p>
				Klaus, not being interested in either option, decided to{" "}
				<Censor whitelist={["Klaus"]}>
					kill [s]everyone in the[/s] general vicinity, Vampire or otherwise. He [s]wanted[/s] to wipe out the clan to prevent a situtation
					where he would need to rise up to the occasion and lead the would-be ravaged clan, but also killed all of his Vampiric family to
					prove that, even without Vampirism, [s]he was indeed the[/s] strongest.
				</Censor>
			</p>

			<p>
				Now having finally{" "}
				<Censor whitelist={["Klaus"]}>
					tasted blood for the first time, [s]Klaus[/s] Dawnbringer [s]went on to indiscriminantly[/s] hunt down everyone and everything in
					the area, earning him the nickname of "The Bloodfiend." His actions had caused The Guild to issue an elimination order, which lead
					to his chance encounter with [s]Alaric and Isolde Nightbringer[/s]. Realizing that he was not a vampire like the rumors were
					saying, but some random kid, they decided to take him in.
				</Censor>
			</p>

			<p>
				<Censor whitelist={["Klaus"]}>
					They sealed his mana, wiped his memory regarding anything related to the Dawnbringer clan or the people he had killed, thus
					creating what's essentially a completely separate being: [s]Klaus Nightshade.[/s]
				</Censor>
			</p>
		</>
	);
}
