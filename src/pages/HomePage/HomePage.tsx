import { useSearchParams } from "react-router-dom";
import BookModel from "../../components/BookModel/BookModel";
import data from "../../core/services";
import { BiSearchAlt } from "react-icons/bi";
import "./HomePage.css";

const HomePage = () => {  
  const [searchParams] = useSearchParams();
  
  const remove_book = (bookID: string) => {
    const confirm = prompt("Do you wish to proceed?.");
    if (confirm) console.log(confirm);
  };

  const filter_data_isbn = (data: any[]) => {
    return data.filter((obj) => {
      const isbn_value = searchParams.get("isbn_key");
      if (!isbn_value) return true;
      return obj.isbn == isbn_value;
    });
  };

  const filter_data_rack = (data: any[]) => {
    return data.filter((obj) => {
      const rack_value = searchParams.get("rack_key");
      if (!rack_value) return true;
      return obj.rack == rack_value;
    });
  };

  const filter_data_category = (data: any[]) => {
    return data.filter((obj) => {
      const category_value = searchParams.get("category_key");
      if (!category_value) return true;
      return obj.category == category_value;
    });
  };

  const search_for = (data: any[]) => {
    return data.filter((obj) => {
      const search_value = searchParams.get("search_key");
      if (!search_value) return true;

      const condition = obj.title.includes(search_value) || obj.author.includes(search_value);
      return obj.search == search_value;
    });
  };

  const getData = search_for(filter_data_category(filter_data_rack(filter_data_isbn(data))));
  return (
    <section className="home-page">
      {/* <section className="navbar navbar-expand-lg navbar-light bg-light">
        <section className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#filterSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="filterSupportedContent">
            <section className="input-search">
              <BiSearchAlt className="input-search-icon" />
              <input className="form-control" type="search" name="search-key" placeholder="Search" aria-label="Search" onChange={(event) => console.log(event.target.value)} />
            </section>
          </section>
        </section>
      </section> */}
      <section className="book-card-list">
        {getData.map((obj, index) => {
          return <BookModel key={index} isbn={obj.isbn} rackNumber={obj.rackNumber} title={obj.title} author={obj.author} category={obj.category} cover={obj.cover} remove={remove_book}></BookModel>;
        })}
      </section>
    </section>
  );
};

export default HomePage;
