import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div > 
				<Link className="navbar__links" to = "/">Classement</Link>
				<Link className="navbar__links"to = "/trello">My Trello</Link>
				<Link className="navbar__links" to = "/drag">Drag and drop</Link>
				<Link className="navbar__links" to = "/modal">Fenêtre pop-up</Link>
				<Link className="navbar__links" to = "/validation">Validation</Link>
				<Link className="navbar__links" to = "/validhooks">Valid hooks</Link>
			</div>
		</div>
	)
}


export default Navbar;