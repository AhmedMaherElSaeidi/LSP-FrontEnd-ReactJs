import { VscChromeClose } from "react-icons/vsc";
import "./ErrorModal.css";

const ErrorModal = ({ message, close }) => {
  return (
    <section className="err-modal-container" title="close" onClick={() => close(false)}>
      {message.map((msg, index) => (
        <section key={index} className="alert alert-danger mb-2">{msg.msg}</section>
      ))}
      <section title="close" onClick={() => close(false)} className="alert alert-secondary">
        <VscChromeClose />
      </section>
    </section>
  );
};

export default ErrorModal;
