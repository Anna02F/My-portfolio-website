//Import icons
import { IoMdCheckmarkCircle } from "react-icons/io";

const Modal = ({ closeModal }) => {
    return (
        <div className="thank-you-message">
            <button className="btn close-btn" onClick={() => closeModal(false)}>
                X
            </button>
            <p>Thanks! Your message has been sent</p>
            <IoMdCheckmarkCircle className="contact-icon" />
        </div>
    );
};

export default Modal;
