import { Link, Outlet } from "react-router-dom";
import "./OptionsPage.css";

const OptionsPage = () => {
  return (
    <section className="options-page">
      <aside className="options-aside-bar">
        <ul>
          <Link to="/pages/options/create-book">
            <li>Add Book</li>
          </Link>
          <Link to="/pages/options/user-accounts">
            <li>Users Account</li>
          </Link>
          <Link to="/pages/options/borrow-requests">
            <li>Borrow Request</li>
          </Link>
        </ul>
      </aside>
      <section className="options-page-body">
        <Outlet />
      </section>
    </section>
  );
};

export default OptionsPage;
