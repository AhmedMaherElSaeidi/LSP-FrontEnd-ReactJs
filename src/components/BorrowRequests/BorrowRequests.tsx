import InsufficientView from "../InsufficientView/InsufficientView";
import FormInput from "../Form/FormInput/FormInput";
import { borrow } from "../../core/services";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaBan } from "react-icons/fa";
import "./BorrowRequests.css";

const BorrowRequests = () => {
  const method = (value: string) => console.log(value);

  return (
    <section className="content-table">
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
                <td className="due-date-col">
                  <FormInput inputType="date" inputName="dueDate" inputMethod={method} inputValue={obj.borrowLimit} inputClass="limit-input" inputPlaceHolder="Return Date" />
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
      <InsufficientView/>
    </section>
  );
};

export default BorrowRequests;
