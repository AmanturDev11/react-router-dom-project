/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ContactPage = ({ cards }) => {
	return (
		<div>
			<Link to={".."}>
				<button>close</button>
			</Link>
			{cards.map((item) => (
				<div key={item._id}>
					<h2>{item.name}</h2>
					<p>{item.lastName}</p>
					<p>{item.date}</p>
					<p>{item.city}</p>
					<p>{item.human}</p>
					<button>delete</button>
					<button>Edit</button>
				</div>
			))}
		</div>
	);
};

export default ContactPage;
