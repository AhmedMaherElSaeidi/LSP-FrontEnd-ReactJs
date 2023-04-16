import BorrowRequests from "../../components/BorrowRequests/BorrowRequests";
import CreateBook from "../../components/CreateBook/CreateBook";
import UpdateBook from "../../components/UpdateBook/UpdateBook";
import UsersAccount from "../../components/UsersAccount/UsersAccount";
import './OptionsPage.css'

const OptionsPage = () => {
  return (
    <section className="options-page">
      <aside className="options-aside-bar">
        <ul>
          <li className="active-selection">Add Book</li>
          <li>Users Account</li>
          <li>Borrow Request</li>
        </ul>
      </aside>
      <section className="options-page-body">
        <CreateBook />
        {/* <UsersAccount/> */}
        {/* <BorrowRequests/> */}
        {/* <UpdateBook boookid={2}/> */}
      </section>
    </section>
  );
};

export default OptionsPage;
