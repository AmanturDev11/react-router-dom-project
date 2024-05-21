/* eslint-disable react/prop-types */
import scss from "./Modal.module.scss";

const Modal = ({ children }) => {
	return (
		<div className={scss.modal_container}>
			<div className={scss.modal_content}>{children}</div>
		</div>
	);
};

export default Modal;
