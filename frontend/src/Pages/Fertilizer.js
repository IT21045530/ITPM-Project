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
              <h3>Fertilizers</h3>
              <p>Smart farming fertilizers are advanced fertilizers that are designed to optimize crop growth and minimize the environmental impact of
                fertilizer use. These fertilizers use precision agriculture techniques and advanced technologies to deliver nutrients to crops in a more
                targeted and efficient way,reducing waste and minimizing the risk of negative environmental impacts.</p>
            </center>
          </Grid>
          <Grid item xs={12} md={4}  >
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Spray} style={{ height: '350px' }} />
                <Card.Body style={{ height: '60px' }}>
                  <Card.Title>Sprays</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Sprays play a crucial role in smart farming, helping farmers to manage pests and diseases while reducing the
                    environmental impact of agriculture.  </Card.Text>
                  <Button variant="success" href="/FlowersPList">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Inorganic} style={{ height: '350px' }} />
                <Card.Body style={{ height: '60px' }}>
                  <Card.Title>Inorganic</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Inorganic fertilizers are a common tool in smart farming, providing farmers with a way to increase crop yields
                    and nutrient content.However, their use must be balanced . </Card.Text>
                  <Button variant="success" href="/FlowersPList">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Organic} style={{ height: '350px' }} />
                <Card.Body style={{ height: '60px' }}>
                  <Card.Title>Organic</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Organic fertilizers are a key component of smart farming, providing farmers
                    with a sustainable and environmentally friendly alternative to traditional chemical fertilizers </Card.Text>
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