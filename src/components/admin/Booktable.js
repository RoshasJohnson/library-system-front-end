import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { axiosInstance } from "../../Axios";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Booktable({ books }) {
  const [details, setDetails] = React.useState({
    title: "",
    descripition: "",
    author: "",
    year_published: "",
    genre: "",
  });
  const [show, setShow] = React.useState(false);

  const [author, setAuthor] = React.useState();
  const [genre, setGenre] = React.useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(localStorage.getItem("token"));
  console.log(books, "book");
  const handleDelete = (id) => {
    console.log(localStorage.getItem("token"));

    axiosInstance
      .delete(`books/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    axiosInstance
        .post("books/", details, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            console.log(res);
        }
        )
        .catch((err) => {
            console.log(err);
        }
        );
    // handleClose();
    }



  React.useEffect(() => {
    axiosInstance
      .get("books/author", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    axiosInstance
      .get("books/genre", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setGenre(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Button
          onClick={handleShow}
          variant="contained"
          style={{ float: "right", margin: "3%" }}
        >
          Add book
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Number</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Author&nbsp;</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Year published</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books &&
              books.map((book) => (
                <TableRow
                  key={book.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {book.id}
                  </TableCell>
                  <TableCell align="right">{book.title}</TableCell>
                  <TableCell align="right">{book.author.first_name}</TableCell>
                  <TableCell align="right">{book.genre.name}</TableCell>
                  <TableCell align="right">{book.year_published}</TableCell>
                  <TableCell style={{ cursor: "pointer" }} align="right">
                    Edit
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                    style={{ cursor: "pointer" }}
                    align="right"
                  >
                    Delete
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal show={show} onHide={handleClose}>
        <Form style={{ width: "100%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                setDetails({ ...details, title: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book description</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDetails({ ...details, descripition: e.target.value });
              }}
              type="text"
              placeholder="Enter name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <select
            onChange={(e) => {
              setDetails({ ...details, author: e.target.value });
            }}
            name=""
            id=""
          >
            <option value="">Select Author</option>
            {author &&
              author.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.first_name} {author.last_name}
                </option>
              ))}
          </select>

          <select
            onChange={(e) => {
              setDetails({ ...details, genre: e.target.value });
            }}
            name=""
            id=""
          >
            {genre &&
              genre.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
          </select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Year published</Form.Label>
            <Form.Control
                onChange={(e) => {
                    setDetails({ ...details, year_published: e.target.value });
                }
                }
                type="number"
                placeholder="Enter year"
                />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            
       

        <Modal.Footer>
          <Button variant="contained" onClick={handlSubmit}>
            Upload
          </Button>
        </Modal.Footer>
         
        </Form>
      </Modal>
    </div>
  );
}
