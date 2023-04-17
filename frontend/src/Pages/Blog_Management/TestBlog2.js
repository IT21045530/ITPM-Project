import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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
    
    <div className={classes.root}><br></br><br></br>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                The global smart harvest market was valued at $12,450.9 million in 2020,
                 and is projected to reach $36,977.1 million by 2030, growing at a CAGR
                  of 11.4% from 2021 to 2030. Smart harvesting refers to the use of self
                  -driving farming robots to gather fruits and vegetables with little or 
                  no human participation. Artificial intelligence (AI), aerial photographs,
                   cloud algorithms, satellites, and technical analysis are all used in smart 
                   harvesting systems. Collecting makes use of a diversity of connected phones
                    to boost yield. Smart harvesting in agriculture pertains to the use of smart
                     technology such as GPS, cloud computer vision, satellite pictures, big data,
                      and IoT to improve crop output.

                The COVID-19 outbreak had a negatively impact on the growth of the global smart 
                harvest industry owing to halt the construction activites globally, and lack of 
                penetration of smart technologies in harvesting robots, and agricultural practices.

                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}




