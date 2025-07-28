import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Mynavbar.jsx";
import Myalert from "./components/MyAlert.jsx";
// import AllTheBooks from "./components/Allthebooks.jsx";
import MyFooter from "./components/MyFooter.jsx";
import fantasyBooks from "./assets/books/fantasy.json";
import BookList from "./components/BookList.jsx";

function App() {
  return (
    <>
      <Mynavbar />
      <Myalert />
      <BookList books={fantasyBooks} />
      <MyFooter />
    </>
  );
}

export default App;
