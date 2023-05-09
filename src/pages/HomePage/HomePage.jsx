import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL, SERVER_DOMAIN } from "../../core/globals";
import { useSearchParams } from "react-router-dom";
import { getToken, getUser } from "../../core/authenication";

import "./HomePage.css";
import books from "../../core/services";
import Spinner from "../../components/Spinner/Spinner";
import BookModel from "../../components/BookModel/BookModel";
import InfoModal from "../../components/InfoModal/InfoModal";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import FormFilter from "../../components/Form/FormFilter/FormFilter";

const HomePage = () => {
  const [content, setContent] = useState(books);
  const [searchParams] = useSearchParams();
  const [homeData, setHomeData] = useState({
    loading: true,
    books: [],
    err: null,
    changes: null,
    message: null,
  });

  const search = (keys, data) => {
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

  const filter = (value, key) => {
    if (value == null) return books;
    return books.filter((book) => book[key] === value);
  };

  const reset_filteration = () => {
    setContent(filter(searchParams.get("category"), "category"));
  };

  useEffect(() => {
    const category = searchParams.get("category");

    setContent(filter(category, "category"));
  }, [searchParams.get("category")]);

  const remove_book = (bookID) => {
    const confirm = prompt("Do you wish to proceed?." + bookID);
    if (!confirm) return;

    setHomeData({ ...homeData, loading: true });
    axios
      .delete(SERVER_URL + `books/${bookID}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setHomeData({ ...homeData, loading: false, changes: !homeData.changes, message: res.data.message[0].msg });
      })
      .catch((err) => {
        setHomeData({ ...homeData, err: err.response.data.message, loading: false });
      });
  };

  useEffect(() => {
    axios
      .get(SERVER_URL + "books/join/book-category/", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setHomeData({ ...homeData, books: res.data, loading: false });
      })
      .catch((err) => {
        setHomeData({ ...homeData, err: err.response.data.message, loading: false });
      });
  }, [homeData.changes]);

  return (
    <section className="home-page">
      <FormFilter submit={search} reset={() => reset_filteration()} />
      <section className="book-card-list">
        {homeData.books.map((obj, index) => {
          return (
            <BookModel
              key={index}
              bookID={obj.book_id}
              isbn={obj.isbn}
              rackNumber={obj.rack_number}
              title={obj.title}
              author={obj.author}
              category={obj.category_book.category}
              cover={SERVER_DOMAIN + obj.photo}
              remove={remove_book}></BookModel>
          );
        })}
      </section>
      {homeData.loading && <Spinner />}
      {homeData.message && <InfoModal message={homeData.message} close={(v) => setHomeData({ ...homeData, message: v })} />}
      {homeData.err && <ErrorModal message={homeData.err} close={(v) => setHomeData({ ...homeData, err: v })} />}
    </section>
  );
};

export default HomePage;
