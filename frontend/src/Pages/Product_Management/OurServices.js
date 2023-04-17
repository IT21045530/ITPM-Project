import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCatogory from '../../Components/ProductCatogory';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Sbk from '../../Images/sbk3.jpg';
import Fbk from '../../Images/frbk1.jpg';
import Ibk from '../../Images/Inbk1.jpg';
import Container from 'react-bootstrap/esm/Container';

function OurServices() {


  return (


    <>
      <Container style={{/* backgroundColor:'red',  */marginTop: '35px', borderRadius: '10px', border: '1px black solid', padding: '15px' }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12} style={{ height: 'auto', /* backgroundColor:'blue', */ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item md={7} xs={7} style={{}}>
              {/* <Card> */}

              <h3 class="card-title"> Smart Farming Products</h3><br></br>
              <h5 class="card-text">Smart Farming products from Smart Harvest – tailored to your farming business.</h5>
              <br></br>
              <p>Smart farming products are innovative agricultural tools and technologies that are designed to optimize crop production,
                reduce labor costs, and improve environmental sustainability. These products utilize advanced technologies such as GPS, sensors,
                cameras, robotics, and machine learning algorithms to perform a range of tasks related to planting,
                irrigation, fertilization, pest management, and harvesting.</p>
              <p class="card-text"></p>
              <Button variant="success" href="/ViewProducts">View Products</Button>{' '}

              {/* </Card> */}
            </Grid>
            <Grid item md={5} xs={5} style={{ overflow: 'hidden' }}>
              <img src={Sbk} style={{ height: '100%' }} />
            </Grid>
          </Grid>

          <Grid item md={12} xs={12} style={{ height: 'auto', /* backgroundColor:'blue', */ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item md={7} xs={7} style={{}}>
              <br></br>
              <br></br>

              {/* <Card> */}
              <h3 class="card-title">Land Owners </h3><br></br>

              <h5 class="card-title">Land Owner Hub - Empowering Sustainable Agriculture through Smart Farming</h5><br></br>
              <p class="card-text">Land owners are individuals or entities who own land that is suitable for agricultural use.
                They may be farmers themselves or lease their land to other farmers for cultivation. As a key
                stakeholder in the agricultural industry, land owners play a crucial role in enabling the growth and development of
                smart farming practices.</p>
              <p class="card-text"></p>
              <Button variant="success" href="/AddProducts">View Land Owners</Button>{' '}

              {/* </Card> */}
            </Grid>
            <Grid item md={5} xs={5} style={{ overflow: 'hidden' }}>
              <img src={Fbk} style={{ height: '100%' }} />
            </Grid>
          </Grid>
          <Grid item md={12} xs={12} style={{ height: 'auto', /* backgroundColor:'blue', */ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item md={7} xs={7} style={{}}>
              {/* <Card> */}

              <h3 class="card-title">Investors</h3><br></br>

              <h5 class="card-title">Smart Farming Investment Hub: Growing the Future of Sustainable Agriculture</h5><br></br>
              <p class="card-text">Land investors are individuals or organizations who invest in agricultural land with the goal of generating
                financial returns. They may purchase land with the intent to lease it to farmers or to develop it for agricultural purposes.
                Land investors can play a significant role in the growth and development of the agricultural industry, particularly in promoting the
                adoption of sustainable and efficient farming practices.</p>
              <p class="card-text"></p>
              <Button variant="success" href="/AddProducts">View Investors</Button>{' '}

              {/* </Card> */}
            </Grid>
            <Grid item md={5} xs={5} style={{ overflow: 'hidden' }}>
              <img src={Ibk} style={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Grid>

      </Container >

    </>

  );
}

export default OurServices