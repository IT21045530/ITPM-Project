import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import ListImg from '../../Images/ProductList.png';


function AddProducts() {


  return (

    <div >

      <br />

      <br />


      <Grid container spacing={10} style={{ padding: '20px', maxWidth: '97%', marginLeft: '24px' }}>


        <Grid item xs={12} md={6}>
          <Paper >
            <Card style={{ backgroundColor: 'white' }}>
              <h2 style={{ textAlign: 'center' }}>Add Smart Farming Product</h2>
              <img src={ListImg} style={{ display: 'block', margin: ' 0 auto', opacity: '60', height: '400px' }} />

              <Card.Footer >
                <Button variant="success" href="/AddProductForm">Click Here</Button>{' '}</Card.Footer>
            </Card>
          </Paper>
        </Grid>


        <Grid item xs={12} md={6}>
          <Paper >
            <Card style={{ backgroundColor: 'white' }}>
              <h2 style={{ textAlign: 'center' }}>View Product List</h2>
              <img src={ListImg} style={{ display: 'block', margin: ' 0 auto', opacity: '60', height: '400px' }} />

              <Card.Footer >
                <Button variant="success" href="/ProductTable">Click Here</Button>{' '}</Card.Footer>
            </Card>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

export default AddProducts