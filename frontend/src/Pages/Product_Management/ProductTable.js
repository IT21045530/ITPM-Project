import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import ReportGenerator from '../../Components/ReportGenerator';


function ViewProductDetails() {
    const [search, setSearch] = useState("");
    const [plants, setPlants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/api/products/getAllPlants/").then((res) => {
            console.log("Plants==> ", res.data);
            setPlants(res.data)
        }).catch(err => {
            alert(err);
        })
    }, [plants])

    const itemDelete = (e) => {
        axios.delete(`http://localhost:4000/api/products/deletePlant/${e}`).then(res => {
            alert("Plant deleted");
        }).catch(err => {
            alert(err)
        })
    }

    const columnsPDF = [{ Plant_Name: 'Plant_Name', Category: 'Category', Price: 'Price', Description: 'Description' }]

    const updatePlantDetails = (data) => {
        navigate('/plantUpdateDetails', { state: { data: data } })
    }

    return (
        <>
            <Container style={{ backgroundColor: 'white', width: '100%', marginTop: '20px', padding: '20px', borderRadius: '15px', marginBottom: '40px' }}>
                <center>
                    <Form className="d-flex" style={{ width: '40%', marginTop: '20px' }}>
                        <Form.Control
                            type="search"
                            value={search}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <Button >Search</Button>
                    </Form>
                </center>

                <Table striped bordered hover style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Plant Name</th>
                            <th>Plant Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.filter((element) => {
                            if (search === "") {
                                return element;
                            } else if ((element.category.toLowerCase()).includes(search.toLocaleLowerCase())) {
                                return element;
                            }
                        }).map((elem, id) => (
                            <tr key={id} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                <td>{id + 1}</td>
                                <td>{elem.plantName}</td>
                                <td>{elem.category}</td>
                                <td>{elem.price}</td>
                                <td>{elem.description}</td>
                                <td>
                                    <Button variant="outline-primary" onClick={() => { updatePlantDetails(elem) }} >Edit</Button>
                                </td>
                                <td>
                                    <Button style={{ marginLeft: "10px" }} variant="outline-danger" onClick={() => itemDelete(elem._id)} >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                <Button varient="outline-primary"
                    onClick={() => ReportGenerator(
                        plants.map(e => ({
                            Plant_Name: e.plantName,
                            Category: e.category,
                            Price: e.price,
                            Description: e.description.substring(0, 100) + '...'
                        }
                        )), columnsPDF, false, "All the plant details")} style={{ marginBottom: 20 }}>Download Plant Details</Button>
            </Container >
        </>
    )
}

export default ViewProductDetails