import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),

        },
    },
}));

function FertilizerUpdate() {
    const classes = useStyles();

    const [fertilizerID, setFertilizerID] = useState();
    const [fertilizerName, setFertilizerName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [id, setID] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        try {
            const fertilizerData = location.state.data;
            console.log("fertilizerData=>>", fertilizerData)

            setFertilizerID(fertilizerData.fertilizerID);
            setFertilizerName(fertilizerData.fertilizerName);
            setDescription(fertilizerData.description);
            setPrice(fertilizerData.price);
            setCategory(fertilizerData.category);
            setID(fertilizerData._id);

        } catch (error) {
            navigate(-1);
        }
    }, [])

    const Validate = (e) => {
        e.preventDefault();

        const formData = {
            fertilizerID,
            fertilizerName,
            description,
            price,
            category,
            id
        }

        console.log("formDate====> ", formData)

        axios.put("http://localhost:4000/api/fertilizers/updateFertilizer", formData).then((res) => {
            alert("Fertilizer datails updated!!!")
            console.log("res.state", res.state);
            navigate(-1);
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <>
            <Container style={{ backgroundColor: 'LightGray', marginTop: '60px', width: '80%', padding: '40px', borderRadius: '5px', marginBottom: '45px' }}>
                <h1 style={{ fontFamily: 'Century Gothic', fontWeight: 'bold', textAlign: 'center' }}>This Is The Fertilizer Update Section</h1>

                <Form onSubmit={Validate}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Product ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ProductID" value={fertilizerID} onChange={(e) => { setFertilizerID(e.target.value) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product name" value={fertilizerName} onChange={(e) => { setFertilizerName(e.target.value) }} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCatagory">
                            <Form.Label>Catagory</Form.Label>
                            <Form.Select onChange={(e) => { setCategory(e.target.value) }} value={category}>
                                <option value="Chemical fertilizers">Chemical fertilizers</option>
                                <option value="Organic fertilizers">Organic fertilizers</option>
                                <option value="others">others</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <center>
                        <Button variant="primary" type="submit" style={{ width: '30%' }}>
                            Save
                        </Button>
                    </center>
                </Form>

            </Container>
        </>
    );
}

export default FertilizerUpdate;