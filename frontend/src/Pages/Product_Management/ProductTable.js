import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import baseURL from '../../config';



function ViewProductDetails() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const seller = localStorage.getItem("UserName")
    const token = localStorage.getItem("Token")
    const config = {
        headers: { 'Authorization': `Bearer ${token}` }
    };
    useEffect(() => {
        axios.get(`${baseURL}/seller-item-handler-controller/api/item/getAllItems/${seller}`, config).then((res) => {
            console.log("first", res.data)
            setItems(res.data.ItemDetails)

        }).catch(err => {
            alert(err)
        })
    }, [items])

    const deleteRecord = (e) => {
        axios.delete(`${baseURL}/seller-item-handler-controller/api/item/itemdelete/${e}`, config).then(res => {
            alert("Item Deleted !")
        }).catch(err => {
            alert(err);
        })
    }

    const updateDetails = (data) => {
        navigate('/ViewDetails/ItemUpdate', { state: { data: data } })
    }

    return (
        <>
            <Container style={{ backgroundColor: 'white', width: '100%', marginTop: '20px', padding: '20px', borderRadius: '15px' }}>
                {/* <Container style={{ marginTop: '1%', display: 'block', width: '100%', justifyContent: 'center' }}> */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                    <Button href='/Seller'>Add Products</Button>
                    <Button style={{ marginLeft: "10px" }} href='/ViewDetails'>View Products</Button>
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
                            {/* <th>Item No</th> */}
                            <th>Item name</th>
                            <th>Item Category</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Description</th>
                            {/* <th>ManufactureDate</th>
                            <th>ExpireDate</th> */}
                            <th>Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {items.filter((element) => {
                            if (search === "") {
                                return element
                            } else if ((element.ItemCategory.toLowerCase()).includes(search.toLowerCase())) {
                                return element
                            }
                        }).map((elem, id) => (
                            <tr key={id} style={{ textAlign: 'center', fontWeight: '400' }}>
                                <td>{id + 1}</td>
                                {/* <td>{elem.ItemNo}</td> */}
                                <td>{elem.ItemName}</td>
                                <td>{elem.ItemCategory}</td>
                                <td>{elem.seller}</td>
                                <td>{elem.Price}</td>
                                <td>{elem.Description}</td>
                                {/* <td>{elem.ManufactureDate}</td>
                                <td>{elem.ExpireDate}</td> */}
                                <td>
                                    <Button variant="outline-primary" onClick={() => { updateDetails(elem) }}>Edit</Button>
                                    <Button style={{ marginLeft: "10px" }} variant="outline-danger" onClick={() => deleteRecord(elem._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container >
        </>
    )
}

export default ViewProductDetails