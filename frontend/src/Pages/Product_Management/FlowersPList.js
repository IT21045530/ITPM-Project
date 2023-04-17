import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from 'react-bootstrap/esm/Container';
import { Button } from '@material-ui/core';
import Basil from '../../Images/basil.jpg';
import Lavender from '../../Images/lavender.jpg'
import Rosmery from '../../Images/rosemary.jpg'
import Tulip from '../../Images/tulip.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        maxHeight: 300
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container style={{ marginTop: '30px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <center>
                            <h3>Flowers and Herbs</h3>
                        </center>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={Basil} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Basil
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Basil. It is a tender plant, and is used in cuisines worldwide. In Western cuisine, the generic term
                                                "basil" refers to the variety also known as sweet basil  or Genovese basil. Basil is native to tropical regions from Central Africa to Southeast Asia.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button href='/PaymentForm'>Buy Now</Button>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={Lavender} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Lavender
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Lavandula is a genus of 47 known species of flowering plants in the mint family, Lamiaceae. It is native to the Old World and is found in Cape Verde and the Canary Islands, and from Europe across to northern and eastern Africa, the Mediterranean, southwest Asia to India.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030115
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button href='/PaymentForm'>Buy Now</Button>

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={Rosmery} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Rosemary
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Salvia rosmarinus, commonly known as rosemary, is a shrub with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region. Until 2017, it was known by the scientific name Rosmarinus officinalis, now a synonym.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030116
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button href='/PaymentForm'>Buy Now</Button>

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={Tulip} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Tulips
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly coloured, generally red, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030117
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button href='/PaymentForm'>Buy Now</Button>

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
