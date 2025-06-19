import Infobox, { InfoEntry, InfoHiddenEntry, InfoImage } from "../../components/Infobox/Infobox";
import Quote from "../../components/Quote/Quote";

export default function OverviewModule() {
	return (
		<>
			<Infobox title="Guy of Santa Monica, the Jobless Bum">
				<InfoImage image_path="\assets\placeholder_man.png" width="80%"></InfoImage>
				<InfoEntry name="Gender">Male</InfoEntry>
				<InfoEntry name="Occupation">Unemployed</InfoEntry>
				<InfoEntry name="Affiliations">Unaffiliated</InfoEntry>
				<InfoEntry name="Relations">None</InfoEntry>
				<InfoEntry name="Aliases">None</InfoEntry>
				<InfoHiddenEntry name="Status">Dead</InfoHiddenEntry>
			</Infobox>
			<Quote author="Guy" time="2 Days Ago">
				We talk about 'survival of the fittest' a lot but all that really means is the skilled live and the unskilled die. Since you're
				clearly in that second group, maybe pick your fights a bit more carefully? Do you understand what I'm saying? It's never going to
				matter how much you 'want it' when you're up against someone who can kill you with a sneeze.
			</Quote>
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
