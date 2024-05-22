/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Ul/Modal/Modal";
import axios from "axios";
import styled from "styled-components";

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
				<div className="container">
					<Content>
						<div>
							<div>
								<CardsMan>
									<CardContentClass>
										<h3>Имя</h3>
										<h3>Фамилия</h3>
										<h3>Город рождения</h3>
										<h3>Gender</h3>
										<Link to="..">
											<button>ADD STUDENT</button>
										</Link>
									</CardContentClass>
									{cards.map((item) => (
										<CardsMap key={item._id}>
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
											<button onClick={() => navigate(`/edit/${item._id}`)}>
												Edit
											</button>
										</CardsMap>
									))}
								</CardsMan>
							</div>
						</div>
						{isModal &&
							createPortal(
								<Modal>
									<div className="">
										<button onClick={() => setIsModal(false)}>cancel</button>
										<button onClick={() => handleDeleteFunkAndModal(itemId)}>
											delete
										</button>
									</div>
								</Modal>,
								document.getElementById("modal")
							)}
					</Content>
				</div>
			</div>
		</>
	);
};

export default ContactPage;

const Content = styled.div`
	button {
		cursor: pointer;
		width: 150px;
		height: 25px;
		background-color: rgb(63, 114, 11);
		color: white;
		border: none;
		font-weight: 600;
		transition: 0.4s;
		&:hover {
			box-shadow: 0px 0px 9px black;
			transform: scale(1.1);
			text-shadow: 0px 0px 10px #00000096;
			color: #800080;
		}
	}
`;

const CardsMan = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
`;

const CardContentClass = styled.div`
	display: flex;
	gap: 80px;
`;

const CardsMap = styled.div`
	width: 1200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 60px;
	border: 1px solid;
	border-radius: 5px;
`;
