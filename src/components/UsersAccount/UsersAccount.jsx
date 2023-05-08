import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../core/globals";
import { getToken, getUser } from "../../core/authenication";

import { FaBan } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { FcAcceptDatabase } from "react-icons/fc";
import { MdChangeCircle, MdPersonRemove } from "react-icons/md";

import "./UsersAccount.css";
import Spinner from "../Spinner/Spinner";
import FormInput from "../Form/FormInput/FormInput";
import ErrorModal from "../ErrorModal/ErrorModal";
import InsufficientView from "../InsufficientView/InsufficientView";

const UsersAccount = () => {
  const [usersData, setUsersData] = useState({
    loading: true,
    users: null,
    err: null,
    changes: true,
  });

  const updateUser = (userID, key, value) => {
    setUsersData({ ...usersData, loading: true });
    const user = {};
    user[key] = value;
    axios
      .put(SERVER_URL + `users/${userID}`, user, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setUsersData({ ...usersData, loading: false, changes: !usersData.changes });
        // alert(res.data.message)
      })
      .catch((err) => {
        setUsersData({ ...usersData, err: err.response.data.message, loading: false });
      });
  };
  const removeUser = (userID) => {
    setUsersData({ ...usersData, loading: true });
    axios
      .delete(SERVER_URL + `users/${userID}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setUsersData({ ...usersData, loading: false, changes: !usersData.changes });
        // alert(res.data.message)
      })
      .catch((err) => {
        setUsersData({ ...usersData, err: err.response.data.message, loading: false });
      });
  };

  useEffect(() => {
    axios
      .get(SERVER_URL + "users/join/user-gender", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setUsersData({ ...usersData, users: res.data, loading: false });
      })
      .catch((err) => {
        setUsersData({ ...usersData, err: err.response.data.message, loading: false });
      });
  }, [usersData.changes]);

  return (
    <>
      <section className="users-account-component">
        <table className="table table-hover table-dark caption-top">
          <caption>Users Account</caption>
          <thead>
            <tr>
              <th>SESSION</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>STATUS</th>
              <th>BORROW_LIMIT</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {usersData.users &&
              usersData.users.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <GoPrimitiveDot className={getUser().userID == obj.user_id ? "fs-2 text-success" : "fs-2 text-danger"} title={getUser().userID == obj.user_id ? "active" : "inactive"} />
                    </td>
                    <td>
                      {obj.username} [{obj.gender_user.gender.charAt(0)}]
                    </td>
                    <td>{obj.email}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.status}</td>
                    <td>
                      {obj.type != "librarian" && (
                        <FormInput inputType="number" inputMethod={(v) => updateUser(obj.user_id, "borrowCount", v.form_input)} inputValue={obj.borrowCount}>
                          <button type="submit-update" className="icon-button" title="update-limit">
                            <MdChangeCircle />
                          </button>
                        </FormInput>
                      )}
                      {obj.type == "librarian" && <span>NOT_AVAILABLE</span>}
                    </td>
                    <td>
                      <section className="d-flex align-items-center">
                        {obj.type != "librarian" && obj.status == "inactive" && (
                          <span className="icon-button" title="activate" onClick={() => updateUser(obj.user_id, "status", "active")}>
                            <FcAcceptDatabase />
                          </span>
                        )}
                        {obj.type != "librarian" && obj.status == "active" && (
                          <span className="icon-button" title="de-activate" onClick={() => updateUser(obj.user_id, "status", "inactive")}>
                            <FaBan />
                          </span>
                        )}
                        {obj.type == "librarian" && <span className="btn-success p-1">Librarian</span>}
                        {getUser().userID != obj.user_id && (
                          <span className="icon-button" onClick={() => removeUser(obj.user_id)}>
                            <MdPersonRemove />
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
      {usersData.loading && <Spinner />}
      {usersData.err && <ErrorModal message={usersData.err} close={(v) => setUsersData({ ...usersData, err: v })} />}
    </>
  );
};

export default UsersAccount;
