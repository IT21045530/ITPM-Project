import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import ReportGenerator from '../../Components/ReportGenerator';


function FertilizerTable() {
    const [search, setSearch] = useState("");
    const [fertilizers, setFertilizer] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/api/fertilizers/getAllFertilizers").then((res) => {
            console.log("ffertilizers===>", res.data);
            setFertilizer(res.data);
        }).catch(err => {
            alert(err);
        })
    }, [fertilizers])

    const updateFertilizerDetails = (data) => {
        navigate("/fertilizerUpdateDetails", { state: { data: data } })
    }

    const deletfertilizer = (e) => {
        axios.delete(`http://localhost:4000/api/fertilizers/deleteFertlizer/${e}`).then(res => {
            alert("Fertilizer deleted");
        }).catch(err => {
            alert(err)
        })
    }

    const columnsPDF = [{ Fertilizer_Name: 'Fertilizer_Name', Category: 'Category', Price: 'Price', Description: 'Description' }]


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
                            <th>Fertilizer Name</th>
                            <th>Fertilizer Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fertilizers.filter((element) => {
                            if (search === "") {
                                return element;
                            } else if ((element.category.toLowerCase()).includes(search.toLocaleLowerCase())) {
                                return element;
                            }
                        }).map((elem, id) => (
                            <tr key={id} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                <td>{id + 1}</td>
                                <td>{elem.fertilizerName}</td>
                                <td>{elem.category}</td>
                                <td>{elem.price}</td>
                                <td>{elem.description}</td>
                                <td>
                                    <Button variant="outline-primary" onClick={() => { updateFertilizerDetails(elem) }} >Edit</Button>
                                </td>
                                <td>
                                    <Button style={{ marginLeft: "10px" }} variant="outline-danger" onClick={() => deletfertilizer(elem._id)} >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                <Button varient="outline-primary"
                    onClick={() => ReportGenerator(
                        fertilizers.map(e => ({
                            Fertilizer_Name: e.fertilizerName,
                            Category: e.category,
                            Price: e.price,
                            Description: e.description.substring(0, 100) + '...'
                        }
                        )), columnsPDF, false, "All the Fertilizer details")} style={{ marginBottom: 20 }}>Download Fertilizer Details</Button>
            </Container >
        </>
    )
}

export default FertilizerTable