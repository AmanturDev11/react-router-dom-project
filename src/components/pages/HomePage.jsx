/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scss from "./HomePage.module.scss";

const url =
	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

const HomePage = ({ setCards }) => {
	// const [cards, setCards] = useState([]);
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
		<div className={scss.HomePage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.cardsContent}>
							<div className={scss.contentClass}>
								<div className={scss.card}>
									<label htmlFor="">First Name</label>
									<input
										className={scss.input}
										type="text"
										placeholder="Your name.."
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className={scss.card}>
									<label htmlFor="">Last Name</label>
									<input
										className={scss.input}
										type="text"
										placeholder="Your last name.."
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
								<div className={scss.card}>
									<label htmlFor="">Gender</label>
									<select
										value={human}
										onChange={(e) => setHuman(e.target.value)}>
										<option value="Male">Male</option>
										<option value="Girls">Girls</option>
									</select>
								</div>
								<div className={scss.card}>
									<label htmlFor="">Город рождения</label>
									<select
										value={city}
										onChange={(e) => setCity(e.target.value)}>
										<option value="Бишкек">Бишкек</option>
										<option value="Ош">Ош</option>
										<option value="Баткен">Баткен</option>
									</select>
								</div>
								<div className={scss.card1}>
									<label htmlFor="">Год рождения</label>
									<input
										type="date"
										value={date}
										onChange={(e) => setDate(e.target.value)}
									/>
								</div>
								<Link to="/contact">
									{/* <button>Go to Contacts</button> */}
									<button onClick={handleAdd}>Добавить студента</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
