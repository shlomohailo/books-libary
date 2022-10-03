import "./ScreenBooks.css";
import TikesBooks from "../../fechers/TikesBooks/TikesBooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { booksContext } from "../../../contexts/booksContexts/booksContexts";

function ScreenBooks() {
  const { books } = useContext(booksContext);
  // console.log(books);
  return (
    <>

      <Container className="booksScreen">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {books.map((book, index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <TikesBooks
                  author={book.author}
                  year={book.year}
                  link={book.link}
                  title={book.title}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default ScreenBooks;
