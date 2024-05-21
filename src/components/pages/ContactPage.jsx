/* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import { createPortal } from "react-dom";
// import { Link } from "react-router-dom";
// import Modal from "../Ul/Modal/Modal";
// import axios from "axios";
// // import axios from "axios";

// const url =
// 	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

// const ContactPage = ({ cards, getTodos }) => {
// 	const [isModal, setIsModal] = useState(false);
// 	const [itemId, setItemId] = useState();
// 	function ModalFunk() {
// 		setIsModal(true);
// 	}
// 	const handleDeleteFunkAndModal = async (id) => {
// 		setIsModal(false);
// 		try {
// 			const response = (await axios.delete(`${url}/${id}`)).data;
// 			console.log(response);
// 			getTodos();
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<>
// 			<div>
// 				<Link to={".."}>
// 					<button>close</button>
// 				</Link>
// 				{cards.map((item) => (
// 					<div key={item._id}>
// 						<h2>{item.name}</h2>
// 						<p>{item.lastName}</p>
// 						<p>{item.date}</p>
// 						<p>{item.city}</p>
// 						<p>{item.human}</p>
// 						<button
// 							onClick={() => {
// 								ModalFunk();
// 								setItemId(item._id);
// 							}}>
// 							delete
// 						</button>
// 						<Link to="/about">
// 							<button>Edit</button>
// 						</Link>
// 					</div>
// 				))}
// 			</div>
// 			{isModal &&
// 				createPortal(
// 					<Modal>
// 						<div>
// 							<button onClick={() => setIsModal(false)}>calsal</button>
// 							<button
// 								onClick={() => {
// 									handleDeleteFunkAndModal(itemId);
// 								}}>
// 								delete
// 							</button>
// 						</div>
// 					</Modal>,
// 					document.getElementById("modal")
// 				)}
// 		</>
// 	);
// };

// export default ContactPage;

// !!!

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { createPortal } from "react-dom";
// import Modal from "../Ul/Modal/Modal";
// import axios from "axios";

// const url =
// 	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

// const ContactPage = ({ cards, getTodos }) => {
// 	const [isModal, setIsModal] = useState(false);
// 	const [itemId, setItemId] = useState();
// 	const navigate = useNavigate();

// 	const ModalFunk = () => {
// 		setIsModal(true);
// 	};

// 	const handleDeleteFunkAndModal = async (id) => {
// 		setIsModal(false);
// 		try {
// 			await axios.delete(`${url}/${id}`);
// 			getTodos();
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<>
// 			<div>
// 				<Link to="..">
// 					<button>close</button>
// 				</Link>
// 				{cards.map((item) => (
// 					<div key={item._id}>
// 						<h2>{item.name}</h2>
// 						<p>{item.lastName}</p>
// 						<p>{item.date}</p>
// 						<p>{item.city}</p>
// 						<p>{item.human}</p>
// 						<button
// 							onClick={() => {
// 								ModalFunk();
// 								setItemId(item._id);
// 							}}>
// 							delete
// 						</button>
// 						<button onClick={() => navigate(`/edit/${item._id}`)}>Edit</button>
// 					</div>
// 				))}
// 			</div>
// 			{isModal &&
// 				createPortal(
// 					<Modal>
// 						<div>
// 							<button onClick={() => setIsModal(false)}>cancel</button>
// 							<button onClick={() => handleDeleteFunkAndModal(itemId)}>
// 								delete
// 							</button>
// 						</div>
// 					</Modal>,
// 					document.getElementById("modal")
// 				)}
// 		</>
// 	);
// };

// export default ContactPage;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Ul/Modal/Modal";
import axios from "axios";

const url =
	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

const ContactPage = ({ cards, getTodos }) => {
	const [isModal, setIsModal] = useState(false);
	const [itemId, setItemId] = useState();
	const navigate = useNavigate();

	const ModalFunk = () => {
		setIsModal(true);
	};

	const handleDeleteFunkAndModal = async (id) => {
		setIsModal(false);
		try {
			await axios.delete(`${url}/${id}`);
			getTodos();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div>
				<Link to="..">
					<button>close</button>
				</Link>
				{cards.map((item) => (
					<div key={item._id}>
						<h2>{item.name}</h2>
						<p>{item.lastName}</p>
						<p>{item.date}</p>
						<p>{item.city}</p>
						<p>{item.human}</p>
						<button
							onClick={() => {
								ModalFunk();
								setItemId(item._id);
							}}>
							delete
						</button>
						<button onClick={() => navigate(`/edit/${item._id}`)}>Edit</button>
					</div>
				))}
			</div>
			{isModal &&
				createPortal(
					<Modal>
						<div>
							<button onClick={() => setIsModal(false)}>cancel</button>
							<button onClick={() => handleDeleteFunkAndModal(itemId)}>
								delete
							</button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
};

export default ContactPage;
