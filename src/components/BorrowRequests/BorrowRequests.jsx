import InsufficientView from "../InsufficientView/InsufficientView";
import Spinner from "../Spinner/Spinner";
import ErrorModal from "../ErrorModal/ErrorModal";
import InfoModal from "../InfoModal/InfoModal";
import FormInput from "../Form/FormInput/FormInput";
import { FaBan } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import "./BorrowRequests.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../core/globals";
import { getToken, getUser } from "../../core/authenication";

const BorrowRequests = () => {
  const [borrowData, setBorrowData] = useState({
    loading: true,
    borrows: [],
    err: null,
    message: null,
    changes: true,
  });

  const validDate = (future_date) => {
    const current_timestamp = new Date();
    const future_timestamp = new Date(future_date);
    return future_timestamp.getTime() > current_timestamp.getTime();
  };

  const updateReturnDate = (future_date) => {
    if (!validDate(future_date)) {
      setBorrowData({ ...borrowData, err: [{ msg: "The selected date is older than the current one." }] });
    }

    return validDate(future_date);
  };

  const updateBorrow = (borrowID, key, value) => {
    setBorrowData({ ...borrowData, loading: true });
    const borrow = {};
    borrow[key] = value;
    axios
      .put(SERVER_URL + `borrows/${borrowID}`, borrow, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setBorrowData({ ...borrowData, loading: false, changes: !borrowData.changes, message: res.data.message[0].msg });
      })
      .catch((err) => {
        setBorrowData({ ...borrowData, loading: false, err: err.response.data.message });
      });
  };

  useEffect(() => {
    axios
      .get(SERVER_URL + "borrows/join/user-book", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setBorrowData({ ...borrowData, borrows: res.data, loading: false });
      })
      .catch((err) => {
        setBorrowData({ ...borrowData, err: err.response.data.message, loading: false });
      });
  }, [borrowData.changes]);

  return (
    <>
      <section className="borrow-rquests-component">
        <table className="table table-hover table-dark caption-top">
          <caption>Borrow Requests</caption>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>USERNAME</th>
              <th>RETURN_DATE</th>
              <th>STATUS</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {borrowData.borrows.map((obj, index) => {
              return (
                <tr key={index}>
                  <td title={obj.book_borrow.title}>{obj.book_borrow.ISBN}</td>
                  <td title={obj.user_borrow.email}>{obj.user_borrow.username}</td>
                  <td>
                    <FormInput
                      inputType="date"
                      inputMethod={(value) => {
                        if (updateReturnDate(value.form_input)) updateBorrow(obj.borrow_id, "return_date", value.form_input);
                      }}
                      inputValue={obj.return_date}>
                      <button type="submit" className="icon-button">
                        <MdChangeCircle />
                      </button>
                    </FormInput>
                  </td>
                  <td>{obj.status}</td>
                  <td>
                    <section className="d-flex align-items-center">
                      {obj.status == "waiting" && (
                        <span className="icon-button" onClick={() => updateBorrow(obj.borrow_id, "status", "accepted")}>
                          <FcAcceptDatabase />
                        </span>
                      )}
                      {obj.status == "accepted" && (
                        <span className="icon-button" onClick={() => updateBorrow(obj.borrow_id, "status", "waiting")}>
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
      {borrowData.loading && <Spinner />}
      {borrowData.message && <InfoModal message={borrowData.message} close={(v) => setBorrowData({ ...borrowData, message: v })} />}
      {borrowData.err && <ErrorModal message={borrowData.err} close={(v) => setBorrowData({ ...borrowData, err: v })} />}
    </>
  );
};

export default BorrowRequests;
