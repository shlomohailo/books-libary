import { createContext, useState,useEffect } from "react";
import { BooksFetch } from "../../services/books";

export const booksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksFetch().then((response) => {
      setBooks(response)
    })
  }, []);

  return (
    <booksContext.Provider value={{ books, setBooks }}>
      {children}
    </booksContext.Provider>
  );
}

export default BooksProvider;
