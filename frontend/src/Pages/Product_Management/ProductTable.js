// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Container from 'react-bootstrap/esm/Container';
// import { Button } from '@material-ui/core';

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

// function createData(name, calories, fat, carbs, protein, edit, del) {
//     return { name, calories, fat, carbs, protein, edit, del };
// }

// const rows = [
//     createData('IP09673', 'Basil', '$19', ' herbs', ' plant', 'Edit', 'Delete'),
//     createData('IP09675', 'levender', '$3', 'herbs', ' plant', 'Edit', 'Delete'),
//     createData('IP09678', 'Basil', '$19', ' herbs', ' plant', 'Edit', 'Delete'),
//     createData('IP09679', 'levender', '$3', 'herbs', ' plant', 'Edit', 'Delete'),

// ];

// export default function BasicTable() {
//     const classes = useStyles();

//     return (

//         <TableContainer component={Paper} style={{ marginTop: '50px' }}>
//             <Container>
//                 <Table className={classes.table} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>ProductID</TableCell>
//                             <TableCell align="right">Product Name</TableCell>
//                             <TableCell align="right">Price</TableCell>
//                             <TableCell align="right">detalis</TableCell>
//                             <TableCell align="right">Catagory</TableCell>
//                             <TableCell align="right">Edit</TableCell>
//                             <TableCell align="right">Delete</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <TableRow key={row.name}>
//                                 <TableCell component="th" scope="row">
//                                     {row.name}
//                                 </TableCell>
//                                 <TableCell align="right">{row.calories}</TableCell>
//                                 <TableCell align="right">{row.fat}</TableCell>
//                                 <TableCell align="right">{row.carbs}</TableCell>
//                                 <TableCell align="right">{row.protein}</TableCell>
//                                 <TableCell align="right">{row.edit}</TableCell>
//                                 <TableCell align="right">{row.del}</TableCell>

//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </Container>
//         </TableContainer>
//     );
// }


import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/esm/Container';
import Basil from '../../Images/basil.jpg';
import Lavender from '../../Images/lavender.jpg'
import Rosmery from '../../Images/rosemary.jpg'
import Tulip from '../../Images/tulip.jpg';


export default function App() {
    return (

        <MDBTable align='middle'>

            <MDBTableHead>
                <tr>
                    <th scope='col'>Product ID</th>
                    <th scope='col'>Product Name</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Catagory</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>
                        <p>IT546</p>
                    </td>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src={Basil}
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>basil</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='fw-normal mb-1'>Rs.100.00</p>

                    </td>
                    <td>
                        <p className='fw-normal mb-1'>flower & herbs</p>

                    </td>
                    <td>Senior</td>
                    <td>
                        <MDBBtn color='link' rounded size='sm'>
                            Edit
                        </MDBBtn>
                    </td>
                    <td>
                        <MDBBtn color='link' rounded size='sm'>
                            Delete
                        </MDBBtn>
                    </td>
                </tr>

            </MDBTableBody>
        </MDBTable>
    );
}