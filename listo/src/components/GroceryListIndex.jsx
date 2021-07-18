import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = (props) => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryListToUpdate, setGroceryListToUpdate] = useState({});
   

    const fetchGroceryList = () => {
        fetch('http://localhost:3000/grocery', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then( (res) => res.json())
            .then( (data) => {
                setGroceryList(data);
                console.log(data);
            })
    }
    const editGroceryList = (listo) => {
        setGroceryListToUpdate(listo);
        console.log(listo);
    }
    useEffect(() => {
        fetchGroceryList();
    }, [])
    return (
        <Container>
            <Row>
                <Col md='3'>
                    <GroceryListCreate fetchGroceryList={fetchGroceryList} token={props.sessionToken}/> 
                </Col>
                <Col md='6'>
                    <GroceryListUpdate groceryListToUpdate={groceryListToUpdate} token={props.sessionToken}/>
                </Col>
            </Row>
        </Container>
    )
};

export default GroceryListIndex;

