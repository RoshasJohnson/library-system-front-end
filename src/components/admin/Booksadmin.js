import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AdminNavbar from "./AdminNavbar";
import Booktable from "./Booktable";
import SideBar from "./SideBar";
import { Box, Grid } from "@mui/material";
import { axiosInstance } from "../../Axios";
function Booksadmin() {


const [books, setBooks] = useState()

useEffect(() => {
    axiosInstance.get("books/")
    .then((response) => {
        console.log(response.data,"bosfdfssdfdsdfsdfsdsdfsoks");
        setBooks(response.data)
    }
    )
    .catch((error) => {
        console.log(error);
    }
    );
  
}, [])    





  return (
    <div>
      <AdminNavbar />

      <div className="admin-content">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item md={3}>
              <SideBar />
            </Grid>
            <Grid item xs={12} md={8}>
       
   
                <Booktable books={books} />
          

            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Booksadmin;
