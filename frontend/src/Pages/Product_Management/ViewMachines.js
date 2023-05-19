import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, Divider, Typography, CardContent } from '@material-ui/core';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    cards: {
        flexGrow: 1,
        padding: 10
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        fontSize: 30,
    },
}));

function ViewMachines() {
    const location = useLocation();
    const ID = location.state.props;
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/machines/getMachines/${ID}`).then((res) => {
            setMachines(res.data.MachineDetails[0]);
        }).catch(err => {
            alert(err)
        })
    }, []);

    const Payment = (e) => {
        navigate("/payment");
    }
    const navigate = useNavigate()

    const classes = useStyles();

    return (
        <>
            <Container style={{ backgroundColor: 'white', width: '80%', marginTop: '20px', padding: '20px', borderRadius: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2%' }}>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={6} md={6} style={{ maxHeight: "100%", maxWidth: "500px" }}>
                        <Card>
                            <center>

                                <img
                                    src={`http://localhost:4000/assets/machines/${machines.machineImage}`}
                                    alt="Nothing"
                                    style={{
                                        width: "50%",
                                        height: "100%"
                                    }}
                                />
                            </center>
                        </Card>
                    </Grid>
                    <Grid item sm={6} >
                        <Paper className={classes.paper}>
                            <p>Category - {machines.category}</p>
                            <h2>{machines.machineName}</h2>
                            <h4>{machines.description}</h4>
                            <br />
                            <h3>Rs.{machines.price}.00</h3>
                            <Button onClick={(e) => Payment(e)} >Proceed To Payment</Button>

                        </Paper>

                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 5 }} />
                </Grid>
            </Container>
        </>
    )
}

export default ViewMachines