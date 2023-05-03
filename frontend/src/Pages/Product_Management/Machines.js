import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ProductCatogory from '../../Components/ProductCatogory';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Machines() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/machines/getAllMachines/").then((res) => {
      setMachines(res.data);
      console.log("res.data")
    }).catch((err) => {
      alert(err);
    }).then((d) => {

    })
  }, [])

  const MoreDetails = (e) => {
    console.log(e._id);
    const ID = e._id;
    navigate("/ViewMachines", { state: { props: ID } });
  };
  return (
    <>
      <ProductCatogory />


      <div classname={classes.root} style={{ padding: "15px" }}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={12}  >
            <center>
              <h3>Smart Farming Machines</h3>
              <p>Smart farming machines are advanced agricultural tools and equipment that are designed to optimize crop production,
                reduce labor costs, and improve environmental sustainability. These machines utilize a range of technologies, including GPS,
                sensors, cameras, robotics, and machine learning algorithms, to perform a variety of tasks related to planting, irrigation,
                fertilization, pest management, and harvesting.</p>
            </center>
          </Grid>
          {machines.map((e, i) => (
            <Grid key={i} item xs={12} md={3} >
              <Card style={{ padding: "10px", height: "28rem", }}>
                <div style={{ height: '11rem', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={`http://localhost:4000/assets/machines/${e.machineImage}`}
                    alt="Nothing"
                    height="100%"
                    width="auto"
                  />
                </div>
                <p style={{ fontFamily: 'Impact', fontSize: '23px', fontWeight: 'bold' }}>{e.machineName}</p>
                <p style={{ fontFamily: 'Impact', fontSize: '23px', fontWeight: 'bold' }}>Rs.{e.price}</p>
                <div style={{ height: '10%' }}>
                  <p>{e.description.substring(0, 50) + '...'}</p>
                </div>
                <p style={{ fontFamily: 'Impact', fontSize: '15px', }}>{e.category}</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="outline-success"
                    onClick={() => MoreDetails(e)}
                    style={{ marginRight: "15px", }}
                  >
                    View More
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>


    </>
  );
}

export default Machines;

