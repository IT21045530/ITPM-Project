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
import Container from 'react-bootstrap/esm/Container';

function Plants() {


  return (

    <div >
      <Container>
        <ProductCatogory />
        <br />


        <Grid container spacing={4} style={{ padding: '15px', maxWidth: '97%', marginLeft: '24px' }}>

          <Grid item xs={12} md={12}  >
            <center>
              <h3>Smart Farming Machines</h3>
              <p>Smart farming machines are advanced agricultural tools and equipment that are designed to optimize crop production,
                reduce labor costs, and improve environmental sustainability. These machines utilize a range of technologies, including GPS,
                sensors, cameras, robotics, and machine learning algorithms, to perform a variety of tasks related to planting, irrigation,
                fertilization, pest management, and harvesting.</p>
            </center>
          </Grid>
          <Grid item xs={12} md={4}  >
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Hydro} style={{ height: '350px' }} />
                <Card.Body style={{ height: '60px' }}>
                  <Card.Title>Hidroponic</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Smart farming technologies have revolutionized the way we cultivate plants using hydroponic methods. Hydroponic farming
                    involves growing plants in a nutrient-rich water solution</Card.Text>
                  <Button variant="success" href="/FlowersPList">Click Here</Button>{' '}</Card.Footer>
              </Card >
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Drone} style={{ height: '350px' }} />
                <Card.Body style={{ height: '60px' }}>
                  <Card.Title>Drones</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Drones are a key tool in smart farming, providing farmers with detailed and real-time information on crop health,
                    soil moisture, and pest infestations. </Card.Text>
                  <Button variant="success" href="/FlowersPList">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Robots} style={{ height: '350px' }} />
                <Card.Body style={{ height: '60px' }}>
                  <Card.Title>Robots and Sensors</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Robots and sensors are transforming the way we cultivate crops by providing farmers with real-time data on plant growth,
                    soil conditions, and weather patterns. </Card.Text>
                  <Button variant="success" href="/FlowersPList">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>

        </Grid>


      </Container>
    </div>
  );
}

export default Plants