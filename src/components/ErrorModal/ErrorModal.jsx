import { RxCrossCircled } from "react-icons/rx";
import "./ErrorModal.css";

const ErrorModal = ({ close }) => {
  return (
    <section className="err-modal-container" title="close" onClick={() => close(false)}>
      <section>
        <RxCrossCircled />
      </section>
      <section>Encountered error.</section>
      <section className="text-small">Look at console for details.</section>
    </section>
  );
};

export default ErrorModal;
