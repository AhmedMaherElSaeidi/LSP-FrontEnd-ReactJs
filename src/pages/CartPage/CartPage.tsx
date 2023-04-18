import BookCartRow from "../../components/BookCartRow/BookCartRow";
import data from "../../core/services";
import "./CartPage.css";

const CartPage = () => {
  const _data = data.slice(0, 3);
  const remove_book = (bookID: string) => {
    const confirm = prompt("Do you wish to proceed?.");
    if (confirm) console.log(confirm);
  };
  return (
    <section className="container-fluid cart-page">
      <section className="books-table">
        <section className="books-table-header text-lightblue mb-2">
          <p>Book</p>
          <p>Details</p>
        </section>
        {_data.map((obj, index) => {
          return (
            <BookCartRow key={index} isbn={obj.isbn} title={obj.title} author={obj.author} rackNumber={obj.rackNumber} cover={obj.cover} category={obj.category} remove={remove_book}/>
          );
        })}
      </section>
    </section>
  );
};

export default CartPage;
