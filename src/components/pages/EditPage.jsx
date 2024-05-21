/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import scss from "./HomePage.module.scss";

// const url =
// 	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

// const EditPage = ({ getTodos }) => {
// 	const { id } = useParams();
// 	const navigate = useNavigate();
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		lastName: "",
// 		date: "",
// 		city: "",
// 		human: "",
// 	});

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await axios.get(`${url}/${id}`);
// 			setFormData(response.data);
// 		};
// 		fetchData();
// 	}, [id]);

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSave = async () => {
// 		await axios.put(`${url}/${id}`, formData);
// 		getTodos();
// 		navigate("/contact");
// 	};

// 	return (
// 		<div className={scss.HomePage}>
// 			<div className="container">
// 				<div className={scss.content}>
// 					<div className={scss.cards}>
// 						<div className={scss.cardsContent}>
// 							<div className={scss.contentClass}>
// 								<div className={scss.card}>
// 									<label htmlFor="name">First Name</label>
// 									<input
// 										className={scss.input}
// 										type="text"
// 										name="name"
// 										value={formData.name}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<div className={scss.card}>
// 									<label htmlFor="lastName">Last Name</label>
// 									<input
// 										className={scss.input}
// 										type="text"
// 										name="lastName"
// 										value={formData.lastName}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<div className={scss.card}>
// 									<label htmlFor="human">Gender</label>
// 									<select
// 										name="human"
// 										value={formData.human}
// 										onChange={handleChange}>
// 										<option value="">Choose an option</option>
// 										<option value="Male">Male</option>
// 										<option value="Female">Female</option>
// 									</select>
// 								</div>
// 								<div className={scss.card}>
// 									<label htmlFor="city">City of Birth</label>
// 									<select
// 										name="city"
// 										value={formData.city}
// 										onChange={handleChange}>
// 										<option value="">Choose an option</option>
// 										<option value="Bishkek">Bishkek</option>
// 										<option value="Osh">Osh</option>
// 										<option value="Batken">Batken</option>
// 									</select>
// 								</div>
// 								<div className={scss.card1}>
// 									<label htmlFor="date">Date of Birth</label>
// 									<input
// 										type="date"
// 										name="date"
// 										value={formData.date}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<button onClick={handleSave}>Save</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default EditPage;

// !!!!

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import scss from "./HomePage.module.scss";

// const url =
// 	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

// const EditPage = ({ getTodos }) => {
// 	const { id } = useParams();
// 	const navigate = useNavigate();
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		lastName: "",
// 		date: "",
// 		city: "",
// 		human: "",
// 	});

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get(`${url}/${id}`);
// 				setFormData(response.data);
// 			} catch (error) {
// 				console.error("Failed to fetch data", error);
// 			}
// 		};
// 		fetchData();
// 	}, [id]);

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSave = async (id) => {
// 		try {
// 			await axios.put(`${url}/${id}`, formData);
// 			getTodos();
// 			navigate("/contact");
// 		} catch (error) {
// 			console.error("Failed to save data", error);
// 		}
// 	};

// 	return (
// 		<div className={scss.HomePage}>
// 			<div className="container">
// 				<div className={scss.content}>
// 					<div className={scss.cards}>
// 						<div className={scss.cardsContent}>
// 							<div className={scss.contentClass}>
// 								<div className={scss.card}>
// 									<label htmlFor="name">First Name</label>
// 									<input
// 										className={scss.input}
// 										type="text"
// 										name="name"
// 										value={formData.name}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<div className={scss.card}>
// 									<label htmlFor="lastName">Last Name</label>
// 									<input
// 										className={scss.input}
// 										type="text"
// 										name="lastName"
// 										value={formData.lastName}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<div className={scss.card}>
// 									<label htmlFor="human">Gender</label>
// 									<select
// 										name="human"
// 										value={formData.human}
// 										onChange={handleChange}>
// 										<option value="Male">Male</option>
// 										<option value="Female">Female</option>
// 									</select>
// 								</div>
// 								<div className={scss.card}>
// 									<label htmlFor="city">City of Birth</label>
// 									<select
// 										name="city"
// 										value={formData.city}
// 										onChange={handleChange}>
// 										<option value="Bishkek">Bishkek</option>
// 										<option value="Osh">Osh</option>
// 										<option value="Batken">Batken</option>
// 									</select>
// 								</div>
// 								<div className={scss.card1}>
// 									<label htmlFor="date">Date of Birth</label>
// 									<input
// 										type="date"
// 										name="date"
// 										value={formData.date}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<button onClick={() => handleSave(formData._id)}>Save</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default EditPage;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import scss from "./HomePage.module.scss";

const url =
	"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";

const EditPage = ({ getTodos }) => {
	const { id,  } = useParams();
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
		if (
			!formData.name ||
			!formData.lastName ||
			!formData.date ||
			!formData.city ||
			!formData.human
		) {
			alert("All fields are required");
			return;
		}

		try {
			console.log("Payload to be sent:", formData); // Log the payload
			const response = await axios.put(`${url}/${id}`, formData);
			console.log("Server response:", response); // Log the server response
			getTodos();
			navigate("/contact");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={scss.HomePage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.cardsContent}>
							<div className={scss.contentClass}>
								<div className={scss.card}>
									<label htmlFor="name">First Name</label>
									<input
										className={scss.input}
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
								</div>
								<div className={scss.card}>
									<label htmlFor="lastName">Last Name</label>
									<input
										className={scss.input}
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>
								<div className={scss.card}>
									<label htmlFor="human">Gender</label>
									<select
										name="human"
										value={formData.human}
										onChange={handleChange}>
										<option value="">Choose an option</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</div>
								<div className={scss.card}>
									<label htmlFor="city">City of Birth</label>
									<select
										name="city"
										value={formData.city}
										onChange={handleChange}>
										<option value="">Choose an option</option>
										<option value="Bishkek">Bishkek</option>
										<option value="Osh">Osh</option>
										<option value="Batken">Batken</option>
									</select>
								</div>
								<div className={scss.card1}>
									<label htmlFor="date">Date of Birth</label>
									<input
										type="date"
										name="date"
										value={formData.date}
										onChange={handleChange}
									/>
								</div>
								<button onClick={handleSave}>Save</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditPage;
