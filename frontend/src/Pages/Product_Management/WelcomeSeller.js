import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SW1 from "../../Images/add11.jpg";
import SW2 from "../../Images/veiwl.jpg";
import Button from 'react-bootstrap/esm/Button';

// import SW1 from "../../Images/SW.jpg"



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



export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <center>
                            <p style={{ marginTop: '50px' }}>Welcome to our seller dashboard! This is the place where you can manage and grow your business by monitoring your sales,
                                updating your inventory, and analyzing your performance. Our dashboard provides you with a comprehensive view of your business,
                                so you can make informed decisions and take action to improve your sales and customer satisfaction. We have designed our dashboard
                                with simplicity and usability in mind, so you can easily navigate and access the tools you need to succeed. From here, you can
                                manage your orders, update your products, and get insights into your sales and traffic. We are committed to providing you with the
                                best possible experience and support, so you can focus on growing your business. Thank you for choosing our platform
                                as your preferred marketplace, and we look forward to helping you achieve your business goals.</p>
                        </center>


                    </Grid>
                    <Grid item xs={6}>

                        <Paper className={classes.paper}>
                            <h5>Add New Product</h5>

                            <img src={SW1} style={{ height: '250px' }} />
                            <Button variant="success" size="large" href="/AddProductForm">Click Here</Button>

                        </Paper>

                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <h5>View Product List</h5>
                            <img src={SW2} style={{ height: '250px' }} />
                            <Button variant="success" size="large" href="/ProductTable">Click Here</Button>

                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </div>
    );
}
