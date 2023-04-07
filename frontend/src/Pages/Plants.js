import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCatogory from '../Components/ProductCatogory';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import flower from '../Images/flower.jpg';
import Vegitable from '../Images/Vegitable.jpg';
import Seeds from '../Images/Seeds.jpg';
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
              <h3>Plants</h3>
              <p>Smart farming techniques are particularly well-suited for a variety of crops, including high-value crops such as fruits, vegetables,
                and herbs, as well as commodity crops such as corn, soybeans, and wheat. By using data and technology to optimize production,
                farmers can increase yields and quality, while reducing the use of chemicals and other inputs.</p>
            </center>
          </Grid>

          <Grid item xs={12} md={4}  >

            <Paper >

              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={flower} style={{ height: '350px' }} />
                <Card.Body style={{ height: '55px' }}>
                  <Card.Title>Flower Plants

                  </Card.Title>

                </Card.Body>
                <Card.Footer>
                  <Card.Text>Add flower plants or View List   </Card.Text>
                  <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Vegitable} style={{ height: '350px' }} />
                <Card.Body style={{ height: '55px' }}>
                  <Card.Title>Vegitable & Fruit Plants</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Add Vegitable & fruit plants or View List   </Card.Text>
                  <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <Card style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
                <img src={Seeds} style={{ height: '350px' }} />
                <Card.Body style={{ height: '55px' }}>
                  <Card.Title>Seeds</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>Add seeds or View List   </Card.Text>
                  <Button variant="success" href="/AddProducts">Click Here</Button>{' '}</Card.Footer>
              </Card>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default Plants