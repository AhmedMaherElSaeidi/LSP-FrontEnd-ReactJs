import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FormFilter from "../../components/Form/FormFilter/FormFilter";
import BookModel from "../../components/BookModel/BookModel";
import books from "../../core/services";
import "./HomePage.css";

const HomePage = () => {
  const [content, setContent] = useState(books);
  const [searchParams] = useSearchParams();

  const search = (keys: string[], data: any) => {
    const _search_value = data[keys[0]];
    const _search_indexes = keys.filter((key) => data[key] === true);
    let _books = [...content];

    _search_indexes.forEach((search_index) => {
      _books = _books.filter((book) => {
        if (typeof book[search_index] === "string") return book[search_index].includes(_search_value);
        else return book[search_index] === _search_value;
      });
    });

    setContent(_books);
  };

  const filter = (value: string, key: string):any[] => {
    if(value == null) return books;
    return books.filter((book) => book[key] === value);
  };

  const reset_filteration = () => {
    setContent(filter(searchParams.get('category')!, 'category'));
  };

  const remove_book = (bookID: string) => {
    const confirm = prompt("Do you wish to proceed?.");
    if (confirm) console.log(confirm);
  };

  useEffect(() => {
    const category = searchParams.get("category");
    console.log(category);

    setContent(filter(category!, "category"));
  }, [searchParams.get("category")]);

  return (
    <section className="home-page">
      <FormFilter submit={search} reset={() => reset_filteration()}/>
      <section className="book-card-list">
        {content.map((obj, index) => {
          return <BookModel key={index} isbn={obj.isbn} rackNumber={obj.rackNumber} title={obj.title} author={obj.author} category={obj.category} cover={obj.cover} remove={remove_book}></BookModel>;
        })}
      </section>
    </section>
  );
};

export default HomePage;
