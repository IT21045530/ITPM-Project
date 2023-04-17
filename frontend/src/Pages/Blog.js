import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function Blog() {
  return (
    <>
    <Container style={{height: '500px', backgroundColor: 'lightgreen'}}>
        <h1>this is the Blog page</h1>
        <Button href='/Blog_Management/Testpage'>Blogs</Button>
        <br></br><br></br>
        <Button href='/Blog_Management/AddBlog'>Add Blogs</Button>
        <br></br><br></br>
        <Button href='/Blog_Management/TestBlog2'>Test Blog</Button>
    </Container>
    </>
  )
}

export default Blog