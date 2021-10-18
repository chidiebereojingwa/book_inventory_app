import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import BookInventory from "../src/components/BookIventorycard";

export interface dataType {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: string;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}

function App() {
  const [data, setData] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<dataType[]>([]);



  useEffect(() => {
    setLoading(true);
    fetch("https://www.anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data: dataType[]) => {
        setData(data);
      })
      .then(() => setLoading(false))
      .catch(setError);

  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!data) {
    return null;
  }


  const searchHandler = (search: string) => {
    setSearch(search);
    if (search !== "") {
      const newBooksList = data.filter((i) => {
        return Object.values(i)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newBooksList);
    } else {
      setSearchResults(data);
    }
  };

 

  return (
    <div className="container">
      <h1>BOOK INVENTORY APPLICATION</h1>
      <Search term={search} searchKeyword={searchHandler} />
      {search.length < 1 ? (
        <ul className="list">
          {data.map((item, i) => {
            return <BookInventory {...item} key={i} />;
          })}
        </ul>
      ) : (
        <ul className="list">
          {searchResults.map((item, i) => {
            return (
              <li key={i} className="list-item">
                {/* <i className="fa fa-book"></i>
								&nbsp;
								{item.name} */}
                <i className="fa fa-book"></i>
                &nbsp;
                {item.name}
                &nbsp;
                <li>Publisher: {item.publisher}</li>
                <li>ISBN: {item.isbn}</li>
                <li>Author: {item.authors}</li>
                <li>End Date: {item.released}</li>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default App;
