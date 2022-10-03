import { useContext } from "react";
import { booksContext } from "../../../contexts/booksContexts/booksContexts";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function BooksTable() {
  const { books } = useContext(booksContext);
  console.log(books);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">country</TableCell>
              <TableCell align="right">language</TableCell>
              <TableCell align="right">book pages</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Book name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.author}</TableCell>
                <TableCell align="right">{item.country}</TableCell>
                <TableCell align="right">{item.language}</TableCell>
                <TableCell align="right">{item.pages}</TableCell>
                <TableCell align="right">{item.year}</TableCell>
                <TableCell align="right">{item.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default BooksTable;
