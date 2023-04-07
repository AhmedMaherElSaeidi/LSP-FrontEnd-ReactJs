import { RxDotFilled } from "react-icons/rx";
import BookModelCart from "../../components/BookCart/BookCart";
import data from "../../core/services";
import "./CartPage.css";

const CartPage = () => {
  const _data = data.slice(0, 3);
  return (
    <section className="container-fluid cart-page">
      <section className="books-table">
        <section className="books-table-header mb-2">
          <p>BOOK</p>
          <p>Details</p>
        </section>
        {_data.map((obj, index) => {
          return (
            <section className="books-table-row" key={index}>
              <BookModelCart title={obj.title} author={obj.Author} cover={obj.Cover} />
              <section className="book-details text-white">
                <section className="mb-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi beatae sapiente hic, officiis temporibus nihil error aliquid culpa commodi quisquam ullam enim doloribus natus sequi.</section>
                <section className="mb-1">
                  <span className="fw-bold">ISBN</span> {obj.ISBN} <RxDotFilled /> <span className="fw-bold">RackNumber</span> {obj.RackNumber} <RxDotFilled /> <span className="fw-bold">{obj.Category}</span>
                </section>
                <section className="mb-1">
                  <h5>Return date.</h5>
                </section>
                <section className="book-details-bottom-border"></section>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default CartPage;
