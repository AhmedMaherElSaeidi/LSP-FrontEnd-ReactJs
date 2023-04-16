import InsufficientView from "../InsufficientView/InsufficientView";
import FormInput from "../Form/FormInput/FormInput";
import { users } from "../../core/services";
import { MdChangeCircle, MdPersonRemove } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaBan } from "react-icons/fa";
import "./UsersAccount.css";

const UsersAccount = () => {
  const method = (value: string) => console.log(value);
  return (
    <section className="content-table">
      <table className="table table-hover table-dark caption-top">
        <caption>Users Account</caption>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>STATUS</th>
            <th>BORROW_LIMIT</th>
            <th>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((obj, index) => {
            return (
              <tr key={index}>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.phone}</td>
                <td>{obj.status}</td>
                <td className="borrow-limit-col">
                  <FormInput inputType="text" inputName="limit" inputMethod={method} inputValue={obj.borrowLimit} inputClass="limit-input" />
                  <span className="icon-button">
                    <MdChangeCircle />
                  </span>
                </td>
                <td>
                  <section className="d-flex align-items-center">
                    <span className="icon-button">
                      <FcAcceptDatabase />
                    </span>
                    <span className="icon-button">
                      <FaBan />
                    </span>
                    <span className="icon-button">
                      <MdPersonRemove />
                    </span>
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

export default UsersAccount;
