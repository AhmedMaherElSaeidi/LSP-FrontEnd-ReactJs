import { VscChromeClose } from "react-icons/vsc";
import "./InfoModal.css";

const InfoModal = ({ message, close }) => {
  return (
    <section className="info-modal-container" title="close" onClick={() => close(false)}>
      <section className="alert alert-success mb-2">
        {message}
      </section>
      <section title="close" onClick={() => close(false)} className="alert alert-secondary">
        <VscChromeClose />
      </section>
    </section>
  );
};

export default InfoModal;
