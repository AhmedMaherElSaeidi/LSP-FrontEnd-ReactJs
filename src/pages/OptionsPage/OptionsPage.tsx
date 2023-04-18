import { Link, Outlet } from "react-router-dom";
import './OptionsPage.css'

const OptionsPage = () => {
  return (
    <section className="options-page">
      <aside className="options-aside-bar">
        <ul>
          <li><Link to="/pages/options/create-book">Add Book</Link></li>
          <li><Link to="/pages/options/user-accounts">Users Account</Link></li>
          <li><Link to="/pages/options/borrow-requests">Borrow Request</Link></li>
        </ul>
      </aside>
      <section className="options-page-body">
        <Outlet/>
      </section>
    </section>
  );
};

export default OptionsPage;
