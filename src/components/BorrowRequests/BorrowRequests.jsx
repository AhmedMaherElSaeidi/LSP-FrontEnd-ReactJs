import InsufficientView from "../InsufficientView/InsufficientView";
import FormInput from "../Form/FormInput/FormInput";
import { borrow } from "../../core/services";
import { FaBan } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import "./BorrowRequests.css";

const BorrowRequests = () => {
  const update = (key, value) => console.log(key, value);

  return (
    <section className="borrow-rquests-component">
      <table className="table table-hover table-dark caption-top">
        <caption>Borrow Requests</caption>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>EMAIL</th>
            <th>DUE_DATE</th>
            <th>STATUS</th>
            <th>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {borrow.map((obj, index) => {
            return (
              <tr key={index}>
                <td>{obj.isbn}</td>
                <td>{obj.email}</td>
                <td>
                  <FormInput inputType="date" inputMethod={(v) => update("return-date", v.input)} inputValue={obj.dueDate}>
                    <button type="submit" className="icon-button">
                      <MdChangeCircle />
                    </button>
                  </FormInput>
                </td>
                <td>{obj.status}</td>
                <td>
                  <section className="d-flex align-items-center">
                    {obj.status == "waiting" && (
                      <span className="icon-button">
                        <FcAcceptDatabase />
                      </span>
                    )}
                    {obj.status == "booked" && (
                      <span className="icon-button">
                        <FaBan />
                      </span>
                    )}
                  </section>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <InsufficientView />
    </section>
  );
};

export default BorrowRequests;
