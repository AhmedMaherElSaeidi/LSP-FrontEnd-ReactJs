import BookModel from "../../components/BookModel/BookModel";
import data from "../../core/services";
import "./BookModelList.css";

interface HomePageProps {
  category?: string;
}
const HomePage = ({ category = "*" }: HomePageProps) => {
  return (
    <section className="book-card-list home-page">
      {data
        .filter((obj) => {
          if (category === "*") return true;
          return category === obj.Category;
        })
        .map((obj, index) => {
          return <BookModel key={index} isbn={obj.ISBN} rackNumber={obj.RackNumber} title={obj.title} author={obj.Author} category={obj.Category} cover={obj.Cover}></BookModel>;
        })}
    </section>
  );
};

export default HomePage;
