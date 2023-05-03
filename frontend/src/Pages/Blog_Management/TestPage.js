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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Man1 from "../../Images/man1.jpeg";
import soil from "../../Images/soil.jpg";
import Logo from "../../Images/logo.png";
import Logo1 from "../../Images/Organic.jpeg";

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} class="border p-4">
      <Grid container spacing={6}>
        <Grid item xs={1} sm={5}>
          <br></br>
          <Paper className={classes.paper}>
            <img
              className={classes.img}
              alt="complex"
              src={Man1}
              style={{ marginRight: "220px" }}
            />
            <br></br>
            <p style={{ marginTop: "50px", textAlign: "justify" }}>
              <h3>Preparing the soil for smart farming</h3>
              Preparing the soil for smart farming is a crucial step in
              optimizing crop yields and implementing sustainable farming
              practices. The quality of the soil plays a vital role in
              determining the success of a farming operation. The process
              involves several steps, starting with testing the soil to
              determine its pH level, nutrient content, and overall health.
              Based on the soil test results, farmers can determine what
              amendments are needed to improve soil fertility and adjust the pH
              level.<br></br>
              <br></br>
              Adding compost, manure, lime, or sulfur are common amendments used
              to improve soil fertility. Cover crops can also be planted to
              improve soil health, reduce erosion, and provide nutrients to the
              soil. Cover crops like legumes fix nitrogen, which can help reduce
              the need for synthetic fertilizers. Additionally, conservation
              tillage practices such as no-till or reduced tillage can help
              maintain soil structure and improve soil health. <br></br>
              <br></br>
              Smart farming techniques such as soil mapping, variable rate
              fertilizer application, and irrigation management can also be
              implemented to optimize soil conditions and improve crop yields.
              Soil mapping allows farmers to identify the variability in the
              soil properties and nutrient levels. Variable rate fertilizer
              application can then be used to apply the right amount of
              fertilizer to the right area, increasing efficiency and reducing
              nutrient loss.<br></br>
              <br></br>
              Regular monitoring of soil health through soil testing, visual
              inspections, and other methods can help identify potential issues
              before they become problems. Soil testing is essential as it helps
              farmers make informed decisions about the appropriate type and
              amount of fertilizers and amendments to apply. Visual inspections
              can help identify soil compaction, erosion, or other issues that
              may need to be addressed.<br></br>
              <br></br>
              In conclusion, preparing the soil for smart farming involves a
              combination of techniques that aim to improve soil health,
              fertility, and structure. It is an ongoing process that requires
              careful attention to detail and a commitment to sustainable
              farming practices. By following these guidelines, farmers can
              optimize crop yields, reduce input costs, and ensure that their
              farming operations are environmentally sustainable.
            </p>
            <img
              className={classes.img}
              alt="complex"
              src={soil}
              style={{ marginRight: "220px", height: "130px", width: "500px" }}
            />
            <button type="button" class="btn btn-success">
              Read More
            </button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={5}>
          <br></br>
          <Paper className={classes.paper}>
            <img
              className={classes.img}
              alt="complex"
              src={Man1}
              style={{ marginRight: "220px" }}
            />
            <br></br>
            <p style={{ marginTop: "50px", textAlign: "justify" }}>
              <h3>
                "How to Plant Seeds in Smartly Prepared Soil Using Smart Farming
                Techniques"
              </h3>
              Planting seeds is an important aspect of farming that can have a
              significant impact on crop yields and profitability. By using
              smart farming techniques, farmers can prepare their soil in a way
              that promotes healthy plant growth and maximizes the potential of
              their crops. Here are some steps to follow for planting seeds in
              well-prepared soil using smart farming techniques.
              <br></br>
              <br></br>
              The first step is to test the soil for its pH level, nutrient
              content, and overall health. Based on the test results, farmers
              can determine what amendments are needed to adjust the pH level
              and improve soil fertility. Common amendments include compost,
              manure, lime, and sulfur. <br></br>
              <br></br>
              Once the soil has been amended, it is time to plant the seeds.
              Farmers must ensure that the soil is free of debris and has
              adequate moisture. Precision planting techniques such as using
              seed drills or planter attachments can help ensure that seeds are
              planted at the right depth and spacing, promoting more even crop
              emergence.<br></br>
              <br></br>
              Variable rate seeding is another smart farming technique that can
              help optimize planting density and reduce input costs. This
              involves adjusting the amount of seed planted in each area based
              on soil variability and other factors.
              <br></br>
              <br></br>
              Finally, regular monitoring of soil health through soil testing
              and visual inspections can help identify potential issues early
              on, allowing farmers to make informed decisions about adjusting
              their planting strategies.
              <br></br>
              <br></br>
              In conclusion, by using smart farming techniques such as precision
              planting, variable rate seeding, and regular soil monitoring,
              farmers can prepare their soil and plant their seeds in a way that
              promotes healthy plant growth and maximizes crop yields. This
              approach can help reduce input costs, increase profitability, and
              promote sustainable farming practices.
            </p>
            <div>
              <button type="button" class="btn btn-success">
                Read More
              </button>
            </div>
          </Paper>
          <button type="button" class="btn btn-success">
            Read More
          </button>
        </Grid>
      </Grid>
    </div>
  );
}
