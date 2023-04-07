import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCatogory from '../Components/ProductCatogory';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Hydro from '../Images/Hydropolic.jpg';
import Drone from '../Images/Drone.jpg';
import Robots from '../Images/Robots.jpg';

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
        <img src={Hydro}  style={{height: '350px'}}/>
        <Card.Body style={{height: '60px'}}>
          <Card.Title>Hidroponic</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Text>Add Hidroponic Items or View List   </Card.Text>
        <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
      </Card >
        </Paper>
        </Grid>
        <Grid item xs={12} md= {4}>
          <Paper >
            <Card style={{ backgroundColor: 'rgb(180, 180, 180)'}}>
        <img src={Drone} style={{height: '350px'}} />
        <Card.Body style={{height: '60px'}}>
          <Card.Title>Drones</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Card.Text>Add Drones or View List   </Card.Text>
        <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
      </Card>
      </Paper>
        </Grid>
        <Grid item xs={12} md= {4}>
          <Paper >
          <Card style={{ backgroundColor: 'rgb(180, 180, 180)'}}>
        <img src={Robots} style={{height: '350px'}} />
        <Card.Body style={{height: '60px'}}>
          <Card.Title>Robots</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Card.Text>Add Robots or View List   </Card.Text>
        <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
      </Card>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Plants