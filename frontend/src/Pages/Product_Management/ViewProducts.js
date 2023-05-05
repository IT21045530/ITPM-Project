import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import YoutubeEmbed from '../../Components/YoutubeEmbed';
import Container from 'react-bootstrap/esm/Container';
import ProductCatogory from '../../Components/ProductCatogory';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        flexGrow: 1,
        // backgroundColor: 'rgb(46, 79, 79)'
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
        // <div className={classes.root}>
        <Container style={{ marginTop: '50px' }}>

            <Grid container spacing={3} /* style={{ padding: '15px', maxWidth: '97%', marginLeft: '24px', marginTop: '50px' }} */>

                <Grid item xs={12}>
                    <center>
                        <h5>SMART FARMING PRODUCTS</h5>
                        <p>Welcome to our products page for smart farming products! We are thrilled to offer a wide range of innovative products that are designed
                            to help farmers increase their crop yield, reduce costs, and minimize environmental impact. Our products are made with the latest
                            technology and are carefully tested to ensure their effectiveness and reliability. We are dedicated to providing top-notch customer
                            service and are committed to helping our customers find the right products to meet their specific needs. Whether you're a small-scale
                            farmer or a large commercial operation,  we have the smart farming products you need to succeed. Thank you for choosing us as your trusted
                            source for smart farming technology!Smart farming products are innovative agricultural tools and technologies that are designed to optimize crop production,
                            reduce labor costs, and improve environmental sustainability. These products utilize advanced technologies such as GPS,
                            sensors, cameras, robotics, and machine learning algorithms to perform a range of tasks related to planting,
                            irrigation, fertilization, pest management, and harvesting.</p>
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <ProductCatogory />
                </Grid>
                <Grid style={{ height: 'auto', }} item xs={12} md={12}>
                    <center>
                        <YoutubeEmbed embedId='KfB2sx9uCkI' />
                    </center>
                </Grid>

            </Grid>
        </Container>







        // </div>
    );
}


