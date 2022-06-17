import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { axiosInstance } from "../../Axios";

function Books() {
  const [books, setBooks] = useState();

  console.log(books);

  useEffect(() => {
    axiosInstance
      .get("books/")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container style={{ marginTop: "8%" }}>

      {books && books.map((book,key) => (

      <Card key  = {key} border="info" style={{ width: "100%", border: "red" }}>
        <h3>{book.title}</h3>
        <Card.Body>
          <Card.Title> Author :{ book.author.first_name } <span> </span> {book.author.last_name} </Card.Title>
          <p>Pen Name : {book.author.pen_name}</p>
          <p>year : {book.year_published}</p>
          <Card.Text>
           {book.description}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}

    </Container>
  );
}

export default Books;
