import BookModel from "../../components/BookModel/BookModel";
import data from "../../core/services";
import "./HomePage.css";

interface HomePageProps {
  category?: string;
}
const HomePage = ({ category = "*" }: HomePageProps) => {
  const remove_book = (bookID: string) => {
    const confirm = prompt("Do you wish to proceed?.");
    if (confirm) console.log(confirm);
  };

  return (
    <section className="book-card-list home-page">
      {data
        .filter((obj) => {
          if (category === "*") return true;
          return category === obj.Category;
        })
        .map((obj, index) => {
          return <BookModel key={index} isbn={obj.isbn} rackNumber={obj.rackNumber} title={obj.title} author={obj.author} category={obj.category} cover={obj.cover} remove={remove_book}></BookModel>;
        })}
    </section>
  );
};

export default HomePage;
