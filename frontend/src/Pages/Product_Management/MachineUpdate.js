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

function MachineUpdate() {
    const classes = useStyles();

    const [machineID, setMachineID] = useState();
    const [machineName, setMachineName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [id, setID] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        try {
            const machineData = location.state.data;
            console.log("plantData=>>", machineData)

            setMachineID(machineData.machineID);
            setMachineName(machineData.machineName);
            setDescription(machineData.description);
            setPrice(machineData.price);
            setCategory(machineData.category);
            setID(machineData._id);

        } catch (error) {
            navigate(-1);
        }
    }, [])

    const Validate = (e) => {
        e.preventDefault();

        const formData = {
            machineID,
            machineName,
            description,
            price,
            category,
            id
        }

        console.log("formDate====> ", formData)

        axios.put("http://localhost:4000/api/machines/updateMachines", formData).then((res) => {
            alert("Machine datails updated!!!")
            console.log("res.state", res.state);
            navigate(-1);
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <>
            <Container style={{ backgroundColor: 'LightGray', marginTop: '60px', width: '80%', padding: '40px', borderRadius: '5px', marginBottom: '45px' }}>
                <h1 style={{ fontFamily: 'Century Gothic', fontWeight: 'bold', textAlign: 'center' }}>This Is The Machine Update Section</h1>

                <Form onSubmit={Validate}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Machine ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ProductID" value={machineID} onChange={(e) => { setMachineID(e.target.value) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product name" value={machineName} onChange={(e) => { setMachineName(e.target.value) }} />
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
                                <option value="Spray items">Spray items</option>
                                <option value="elecric items">elecric items</option>
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

export default MachineUpdate;