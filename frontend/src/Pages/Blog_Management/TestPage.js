// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Man1 from '../../Images/man1.jpeg';
// import Container from 'react-bootstrap/esm/Container';

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 138,
//     height: 138,
//   },
//   imgi:{
//     width: 25,
//     height: 25,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
    
//     <><div className={classes.root}>
//     <Container><Grid item xs={6} >
//       <Paper className={classes.paper}>
//         <Grid container spacing={1}>
          
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src={Man1} />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Dr. Sherif Sedky
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Vice president of digital tranformation,
//                 </Typography>

//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   The global smart harvest market was valued at $12,450.9 million in 2020,
//                   and is projected to reach $36,977.1 million by 2030, growing at a CAGR
//                   of 11.4% from 2021 to 2030. Smart harvesting refers to the use of self
//                   -driving farming robots to gather fruits and vegetables with little or
//                   no human participation. Artificial intelligence (AI), aerial photographs,
//                   cloud algorithms, satellites, and technical analysis are all used in smart
//                   harvesting systems. Collecting makes use of a diversity of connected phones
//                   to boost yield. Smart harvesting in agriculture pertains to the use of smart
//                   technology such as GPS, cloud computer vision, satellite pictures, big data,
//                   and IoT to improve crop output.

//                   The COVID-19 outbreak had a negatively impact on the growth of the global smart
//                   harvest industry owing to halt the construction activites globally, and lack of
//                   penetration of smart technologies in harvesting robots, and agricultural practices.

//                 </Typography>
//                 <br></br>

                
//                   <ButtonBase className={classes.image}>
//                   <a href="EditBlog.js"><img className={classes.imgi} alt="Edit" src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" /></a>
//                   </ButtonBase>
//                   <ButtonBase className={classes.image}>
//                    <img className={classes.imgi} alt="Edit" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
//                   </ButtonBase>
                






//               </Grid>
//             </Grid>

//           </Grid>
//         </Grid>
//       </Paper>
//       </Grid>
//       <Grid item xs={6}>
//       <Paper className={classes.paper}>
//           <Grid container spacing={1}>
//             <Grid item>
//               <ButtonBase className={classes.image}>
//                 <img className={classes.img} alt="complex" src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" />
//               </ButtonBase>
//             </Grid>
//             <Grid item xs={12} sm container>
//               <Grid item xs container direction="column" spacing={2}>
//                 <Grid item xs>
//                   <Typography gutterBottom variant="subtitle1">
//                     Dr. Sherif Sedky
//                   </Typography>
//                   <Typography variant="body2" gutterBottom>
//                     Vice president of digital tranformation,
//                   </Typography>

//                 </Grid>
//                 <Grid item>
//                   <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                     The global smart harvest market was valued at $12,450.9 million in 2020,
//                     and is projected to reach $36,977.1 million by 2030, growing at a CAGR
//                     of 11.4% from 2021 to 2030. Smart harvesting refers to the use of self
//                     -driving farming robots to gather fruits and vegetables with little or
//                     no human participation. Artificial intelligence (AI), aerial photographs,
//                     cloud algorithms, satellites, and technical analysis are all used in smart
//                     harvesting systems. Collecting makes use of a diversity of connected phones
//                     to boost yield. Smart harvesting in agriculture pertains to the use of smart
//                     technology such as GPS, cloud computer vision, satellite pictures, big data,
//                     and IoT to improve crop output.

//                     The COVID-19 outbreak had a negatively impact on the growth of the global smart
//                     harvest industry owing to halt the construction activites globally, and lack of
//                     penetration of smart technologies in harvesting robots, and agricultural practices.

//                   </Typography>
//                   <br></br>

//                   <ButtonBase className={classes.image}>
//                     <img className={classes.imgi} alt="Edit" src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" />
//                   </ButtonBase>
//                   <ButtonBase className={classes.image}>
//                     <img className={classes.imgi} alt="Edit" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
//                   </ButtonBase>






//                 </Grid>
//               </Grid>

//             </Grid>
//           </Grid>
//         </Paper>
//         </Grid>
//       </Container>
//     </div>
   


    
        
//       </>




//   );
// }



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Man1 from '../../Images/man1.jpeg';
import Logo from '../../Images/logo.png';
import Logo1 from '../../Images/Organic.jpeg';

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} class="border p-4">
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}> 
      <br></br>
          <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src={Man1} style={{marginRight:'220px'}}/><br></br>
          <p style={{marginTop:'50px'}}>
            <h3>This is heading of the Blog</h3>
            
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
                  </p>
                  <button type="button" class="btn btn-success">Read More</button>
        </Paper>
        </Grid>
       

      

        <Grid item xs={12} sm={6}>
      <br></br>
          <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src={Man1} style={{marginRight:'220px'}}/><br></br>
          <p style={{marginTop:'50px'}}>
          <h3>This is heading of the Blog</h3>
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
                  </p>
                  <div >
                  <button type="button" class="btn btn-success" >Read More</button>
                  </div>
            </Paper>
            <button type="button" class="btn btn-success" >Read More</button>
           
                  
        </Grid>

        
        
      </Grid>

      
    </div>



    
  );
}

