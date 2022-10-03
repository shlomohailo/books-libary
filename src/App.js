import "./App.css";
import ScreenBooks from "./components/pages/ScreenBooks/ScreenBooks";
import BooksTable from "./components/pages/BooksTable/BooksTable";
import BooksProvider from "./contexts/booksContexts/booksContexts";
import { Header } from "../src/components/fechers/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // משם לקחתי דוגמא  https://www.w3schools.com/react/react_router.asp

function App() {
  return (
    <>
      <BooksProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<ScreenBooks />} />
            <Route path="table" element={<BooksTable />} />
          </Routes>
        </BrowserRouter>
      </BooksProvider>
    </>
  );
}

export default App;
