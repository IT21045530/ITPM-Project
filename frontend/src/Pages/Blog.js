import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function Blog() {
  return (
    <>
    <Container style={{height: '500px', backgroundColor: 'lightgreen' , padding: '10%'}}>7
        <h1>this is the Blog page</h1>
        <Button href='Blog_Management/Testpage'>Blogs</Button>
        <br></br><br></br>
        <Button href='/AddBlog'>Add Blogs</Button>
        <br></br><br></br>
        <Button href='/TestBlog2'>Test Blog</Button>
    </Container>
    </>
  )
}

export default Blog