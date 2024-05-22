/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const url =
	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

const EditPage = ({ getTodos }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		lastName: "",
		date: "",
		city: "",
		human: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${url}/${id}`);
				setFormData(response.data);
			} catch (error) {
				console.error("Failed to fetch data", error);
			}
		};
		fetchData();
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSave = async () => {
		const { _id, ...updatedData } = formData;

		try {
			console.log("Payload to be sent:", updatedData);
			const response = await axios.put(`${url}/${id}`, updatedData);
			console.log("Server response:", response);
			getTodos();
			navigate("/contact");
		} catch (error) {
			console.error(error);
			if (error.response) {
				console.error("Server responded with an error", error.response.data);
			} else if (error.request) {
				console.error("No response received", error.request);
			} else {
				console.error("Error setting up request", error.message);
			}
		}
	};

	return (
		<EditPages>
			<div className="container">
				<Content>
					<Cards>
						<div>
							<ContentClass>
								<Card>
									<label htmlFor="name">First Name</label>
									<Input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
								</Card>
								<Card>
									<label htmlFor="lastName">Last Name</label>
									<Input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</Card>
								<Card>
									<label htmlFor="human">Gender</label>
									<select
										name="human"
										value={formData.human}
										onChange={handleChange}>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</Card>
								<Card>
									<label htmlFor="city">Город рождения</label>
									<select
										name="city"
										value={formData.city}
										onChange={handleChange}>
										<option value="Бишкек">Бишкек</option>
										<option value="Ош">Ош</option>
										<option value="Баткен">Баткен</option>
									</select>
								</Card>
								<Card1>
									<label htmlFor="date">Date of Birth</label>
									<input
										type="date"
										name="date"
										value={formData.date}
										onChange={handleChange}
									/>
								</Card1>
								<button onClick={handleSave}>Save</button>
								<Link to="/contact">
									<button>Отмена</button>
								</Link>
							</ContentClass>
						</div>
					</Cards>
				</Content>
			</div>
		</EditPages>
	);
};

export default EditPage;

const EditPages = styled.div`
	color: black;
`;

const Content = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid;
	margin-left: 200px;
	width: 800px;
	height: 750px;
	border: 2px solid white;
	border-radius: 5px;
`;

const Cards = styled.div`
	width: 550px;
	height: 650px;
	background-color: rgba(255, 255, 255, 0.714);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 5px;
`;

const ContentClass = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	select {
		width: 480px;
		height: 30px;
		background-color: white;
		color: black;
		border: none;
		border-radius: 5px;
	}
	button {
		width: 480px;
		height: 30px;
		background-color: rgb(63, 114, 11);
		color: white;
		border: none;
		border-radius: 5px;
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

const Input = styled.input`
	width: 480px;
	height: 30px;
	background-color: white;
	color: black;
	border: none;
	border-radius: 5px;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
`;
const Card1 = styled.div`
	display: flex;
`;
