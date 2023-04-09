import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Fbk from '../Images/frbk1.jpg';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import Container from 'react-bootstrap/esm/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProductCatogory from '../Components/ProductCatogory';






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
                        <p>Smart farming products are innovative agricultural tools and technologies that are designed to optimize crop production,
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

