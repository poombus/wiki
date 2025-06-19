import { useNavigate } from "react-router";
import "./Home.css";

function Home() {
	const navigate = useNavigate();
	return (
		<center>
			<div style={{ width: "75vw" }}>
				<h1>Welcome to the Kingdom, Adventurers!</h1>
				<h5>A safe haven for for all humans alike.</h5>
				<p style={{ color: "var(--alt-color)", width: "55%" }}>
					Within the documents found in Alexandria, you will find details the setting of the campaign, as well as information about the
					people and things that reside its walls.
				</p>
				<p style={{ color: "var(--alt-color)", width: "55%" }}>
					Do note, however, that some residents of the Kingdom do not have the permissions nor the means to access certain sections
					contained within the file, but all things shall be revealed in due time.
				</p>
				<div className="headline" style={{ marginTop: "50px" }}>
					<h2>Get Started</h2>
				</div>
				<div className="d-flex justify-content-center">
					<div style={{ width: "500px" }}>
						<img src="assets/the_kingdom.png" alt="the_kingdom.png" style={{ height: "200px" }} />
						<p>The Kingdom</p>
					</div>
					<div style={{ width: "500px" }}>
						<img src="assets/sword.png" alt="sword.png" style={{ height: "200px" }} />
						<p>Combat</p>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div style={{ width: "500px" }}>
						<img src="assets/spellbook.png" alt="spellbook.png" style={{ height: "200px" }} />
						<p>Spells</p>
					</div>
					<div style={{ width: "500px" }}>
						<img src="assets/character.png" alt="character.png" style={{ height: "200px" }} />
						<p>Characters</p>
					</div>
				</div>
				<div className="headline" style={{ marginTop: "100px" }}>
					<h2>The Party</h2>
				</div>
				<div className="d-flex justify-content-center party-list">
					<div onClick={() => navigate("/characters/atlas")} style={{ cursor: "pointer" }}>
						<img src="icons/party/atlas.png" alt="atlas_icon.png" style={{ height: "50px" }} />
						<p>Atlas</p>
					</div>
					<div onClick={() => navigate("/characters/lyra")} style={{ cursor: "pointer" }}>
						<img src="icons/party/lyra.png" alt="lyra_icon.png" style={{ height: "50px" }} />
						<p>Lyra</p>
					</div>
					<div onClick={() => navigate("/characters/klaus")} style={{ cursor: "pointer" }}>
						<img src="icons/party/klaus.png" alt="klaus_icon.png" style={{ height: "50px" }} />
						<p>Klaus</p>
					</div>
					<div onClick={() => navigate("/characters/willow")} style={{ cursor: "pointer" }}>
						<img src="icons/party/willow.png" alt="willow_icon.png" style={{ height: "50px" }} />
						<p>Willow</p>
					</div>
					<div onClick={() => navigate("/characters/ultra")} style={{ cursor: "pointer" }}>
						<img src="icons/party/ultra.png" alt="ultra_icon.png" style={{ height: "50px" }} />
						<p>Ultra</p>
					</div>
					<div onClick={() => navigate("/characters/boughb")} style={{ cursor: "pointer" }}>
						<img src="icons/party/boughb.png" alt="boughb_icon.png" style={{ height: "50px" }} />
						<p>Boughb</p>
					</div>
				</div>
			</div>
		</center>
	);
}

export default Home;
