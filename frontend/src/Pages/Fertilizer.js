import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCatogory from '../Components/ProductCatogory';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Spray from '../Images/Spray.jpg';
import Inorganic from '../Images/Inoorganic.jpg';
import Organic from '../Images/Organic.jpeg';

function Plants() {
  

  return (
    
    <div >
      <ProductCatogory/>
      <br/>
      <br/>

      <Grid container spacing={4} style = {{padding: '15px' , maxWidth: '97%' ,marginLeft:'24px' }}>
        <Grid item xs={12} md= {4}  >
        <Paper >
        <Card style={{ backgroundColor: 'rgb(180, 180, 180)'}}>
        <img src={Spray}  style={{height: '350px'}}/>
        <Card.Body style={{height: '60px'}}>
          <Card.Title>Sprays</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Card.Text>Add Sprays or View List   </Card.Text>
        <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
      </Card>
        </Paper>
        </Grid>
        <Grid item xs={12} md= {4}>
          <Paper >
            <Card style={{ backgroundColor: 'rgb(180, 180, 180)'}}>
        <img src={Inorganic} style={{height: '350px'}} />
        <Card.Body style={{height: '60px'}}>
          <Card.Title>Inorganic</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Card.Text>Add Inorganic fertilizers or View List   </Card.Text>
        <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
      </Card>
      </Paper>
        </Grid>
        <Grid item xs={12} md= {4}>
          <Paper >
          <Card style={{ backgroundColor: 'rgb(180, 180, 180)'}}>
        <img src={Organic} style={{height: '350px'}} />
        <Card.Body style={{height: '60px'}}>
          <Card.Title>Organic</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Card.Text>Add Organic fertilizers or View List   </Card.Text>
        <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
      </Card>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Plants