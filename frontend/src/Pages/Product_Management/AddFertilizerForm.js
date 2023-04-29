import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from "axios"
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),

        },
    },
}));

function AddFertilizerForm() {
    const classes = useStyles();

    const [fertilizerID, setFertilizerID] = useState();
    const [fertilizerName, setFertilizerName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [fertilizerImage, setFertilizerImage] = useState();
    const navigate = useNavigate();

    const Validate = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("fertilizerID", fertilizerID);
        formData.append("fertilizerName", fertilizerName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("file", fertilizerImage);

        console.log("formData", formData)

        if (fertilizerImage) {
            axios.post("http://localhost:4000/api/fertilizers/fertilizerInsertion", formData).then(async res => {
                console.log("Fertilizer item inserted")
                alert("new item inserted")
                navigate("/WelcomeSeller")
            }).catch(err => {
                console.log("Product item insertion failed")
                alert("Machine insertion failed")
            })
        } else {
            console.log("Fill is not set")
        }
    }

    const fileUpload = async (e) => {
        console.log("File set");
        setFertilizerImage(e.target.files[0]);
    }

    return (
        <>
            <Container >
                <center>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button variant="outline-success" href='/AddProductForm'>
                                    Plants
                                </Button>
                                <Button variant="outline-success" href='/AddMachineForm'>
                                    Smart Farming Machines
                                </Button>
                                <Button variant="outline-success" href='/AddFertilizerForm'>
                                    Fertilizers
                                </Button>
                            </Grid>
                        </Grid>
                    </div >
                </center >
            </Container >
            <Container style={{ backgroundColor: 'LightGray', marginTop: '60px', width: '80%', padding: '40px', borderRadius: '5px' }}>
                <h1>This is the add Fertilizer section</h1>

                <Form onSubmit={Validate}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Fertilizer ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ProductID" onChange={(e) => { setFertilizerID(e.target.value) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Fertilizer Name</Form.Label>
                            <Form.Control type="text" placeholder="Product name" onChange={(e) => { setFertilizerName(e.target.value) }} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} />
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" onChange={(e) => { setPrice(e.target.value) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCatagory">
                            <Form.Label>Catagory</Form.Label>
                            <Form.Select onChange={(e) => { setCategory(e.target.value) }}>
                                <option value="Chemical fertilizers">Chemical fertilizers</option>
                                <option value="Organic fertilizers">Organic fertilizers</option>
                                <option value="others">others</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Enter fertilizer image: </Form.Label>
                        <Form.Control type="file" onChange={(e) => { fileUpload(e) }} accept='image/*' required />
                    </Form.Group>

                    <center>
                        <Button variant="primary" type="submit" style={{ width: '30%' }}>
                            Submit
                        </Button>
                    </center>
                </Form>

            </Container>
        </>
    );
}

export default AddFertilizerForm;