/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const url =
	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

const HomePage = ({ setCards }) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [date, setDate] = useState("");
	const [city, setCity] = useState("");
	const [human, setHuman] = useState("");

	const handleAdd = async () => {
		const newData = {
			name,
			lastName,
			date,
			city,
			human,
		};
		const response = await axios.post(url, newData);
		setCards(response.data);
		setName("");
		setLastName("");
		setDate("");
		setCity("");
		setHuman("");
	};

	const getTodos = async () => {
		const response = await axios.get(url);
		setCards(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<HomePages>
			<div className="container">
				<Content>
					<Cards>
						<div>
							<ContentClass>
								<Card>
									<label htmlFor="">First Name</label>
									<Input
										type="text"
										placeholder="Your name.."
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Card>
								<Card>
									<label htmlFor="">Last Name</label>
									<Input
										type="text"
										placeholder="Your last name.."
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Card>
								<Card>
									<label htmlFor="">Gender</label>
									<select
										value={human}
										onChange={(e) => setHuman(e.target.value)}>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</Card>
								<Card>
									<label htmlFor="">Город рождения</label>
									<select
										value={city}
										onChange={(e) => setCity(e.target.value)}>
										<option value="Бишкек">Бишкек</option>
										<option value="Ош">Ош</option>
										<option value="Баткен">Баткен</option>
									</select>
								</Card>
								<Card1>
									<label htmlFor="">Год рождения</label>
									<input
										type="date"
										value={date}
										onChange={(e) => setDate(e.target.value)}
									/>
								</Card1>
								<Link to="/contact">
									{/* <button>Go to Contacts</button> */}
									<button onClick={handleAdd}>Добавить студента</button>
								</Link>
							</ContentClass>
						</div>
					</Cards>
				</Content>
			</div>
		</HomePages>
	);
};

export default HomePage;

const HomePages = styled.div`
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
			transform: scale(1.0);
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
