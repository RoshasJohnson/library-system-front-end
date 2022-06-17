import React from 'react'
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Books from './Books';


function BookShow() {


  return (
    <Container>
          <Books/>
        <Pagination style={{float:"right"}} count={10} color="secondary" />
    </Container>
  )
}

export default BookShow