import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from 'react-bootstrap/esm/Container';
import { Card } from '@material-ui/core';
import logo from '../../Images/logo.png'
import Form from "react-bootstrap/Form"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function LoginNew() {
    const classes = useStyles();

    return (
        <>
            <Container style={{ marginTop: '5%', marginBottom: '5%' }}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                            <div style={{ display: 'block', justifyContent: 'center', }}>
                                <img
                                    src={logo}
                                    height='auto'
                                    width='40%'
                                    style={{ marginLeft: '30%' }}
                                />
                                <h4 style={{ textAlign: 'center' }}>We Are The Smart Harvest Team</h4>
                                <p style={{ textAlign: 'center' }}>Please login to your account</p>
                            </div>
                            <Card style={{ padding: '30px' }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Enter your email address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>


                                </Form>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={6} style={{ backgroundColor: '#3cb371' }}>
                            <h4>We are more than just a company</h4>
                            <p class="small mb-0">Smart farming products from Smart Harvest to tailored to your farming business, Also we have Land Owner Hub that empowering sustainable agriculture through smart farming And also we have Smart Farming Investment Hub to help growing the future of sustainable agriculture in Sri Lanka.</p>

                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default LoginNew
