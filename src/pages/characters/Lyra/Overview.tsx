import Infobox, { InfoEntry, InfoHiddenEntry, InfoImage } from "../../../components/Infobox/Infobox";

export default function Overview() {
	return (
		<>
			<Infobox title="Lyra" width="300px">
				<InfoImage image_path="\assets\placeholder_man.png" width="80%"></InfoImage>
				<InfoEntry name="Gender">Female</InfoEntry>
				<InfoEntry name="Occupation">
					Starlight Agency Talent <br /> Adventurer (Unofficial)
				</InfoEntry>
				<InfoEntry name="Affiliation">Starlight Agency</InfoEntry>
				<InfoEntry name="Relations">
					Sebatian (Manager)
					<br /> Ace, Ariadne, Quicksilver, Seraphina, Sotheby (Compatriots)
					<br /> "The Star" (Benefactor)
				</InfoEntry>
				<InfoHiddenEntry name="Status">Alive</InfoHiddenEntry>
			</Infobox>
			<p>
				This a quick description of the character as a whole. Basically, if you were to meet this character on the street, what would your
				first impression of them be and what would they tell you about themselves.
			</p>
			<h2 className="headline">Appearance</h2>
			<p>A description of the character's physical appearance.</p>
			<h2 className="headline">Personality</h2>
			<p>A description of how the character acts in response to certain situations.</p>
			<h2 className="headline">Backstory</h2>
			<p>A retelling of events significant to this character's lore, focusing on events the preceed the main story.</p>
			<p>If this character's backstory or story is very lengthy and detailed, move both to this character's Story page.</p>
			<h2 className="headline">Story</h2>
			<p>
				A retelling of the events that this character was involved in, focusing mainly on their contributions (directly or not) to the
				progression of the story.
			</p>
			<p>If this character's backstory or story is very lengthy and detailed, move both to this character's Story page.</p>
		</>
	);
}
