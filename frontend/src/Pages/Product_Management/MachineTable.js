import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';



function MachineTable() {
    const [search, setSearch] = useState("");
    const [machines, setMachines] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/api/machines/getAllMachines/").then((res) => {
            console.log("machines==>", res.data);
            setMachines(res.data);
        }).catch(err => {
            alert(err)
        })
    }, [machines])

    const machineDelete = (e) => {
        axios.delete(`http://localhost:4000/api/machines/deleteMachine/${e}`).then(res => {
            alert("Machine deleted");
        }).catch(err => {
            alert(err)
        })
    }

    const updateMechineDetails = (data) => {
        navigate("/machineUpdateDetails", { state: { data: data } })
    }

    return (
        <>
            <Container style={{ backgroundColor: 'white', width: '100%', marginTop: '20px', padding: '20px', borderRadius: '15px' }}>
                {/* <Container style={{ marginTop: '1%', display: 'block', width: '100%', justifyContent: 'center' }}> */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                    <Button href='/ProductTable'>Plants</Button>
                    <Button style={{ marginLeft: "10px" }} href='/MachineTable'>Machines</Button>
                    <Button style={{ marginLeft: "10px" }} href='/FertilizerTable'>Fertilizers</Button>
                </div>
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
                            <th>Machine Name</th>
                            <th>Machine Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Edit</th>

                        </tr>
                    </thead>
                    <thead>
                        {machines.filter((element) => {
                            if (search === "") {
                                return element;
                            } else if ((element.category.toLowerCase()).includes(search.toLocaleLowerCase())) {
                                return element;
                            }
                        }).map((elem, id) => (
                            <tr key={id} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                <td>{id + 1}</td>
                                <td>{elem.machineName}</td>
                                <td>{elem.category}</td>
                                <td>{elem.price}</td>
                                <td>{elem.description}</td>
                                <td>
                                    <Button variant="outline-primary" onClick={() => { updateMechineDetails(elem) }} >Edit</Button>
                                    <Button style={{ marginLeft: "10px" }} variant="outline-danger" onClick={() => machineDelete(elem._id)} >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </thead>

                </Table>
            </Container >
        </>
    )
}

export default MachineTable