import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = (props) => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryListToUpdate, setGroceryListToUpdate] = useState({});

    const [groceries, setGroceries] = useState([]);

    const fetchGroceryList = () => {
        fetch('http://localhost:3000/grocery', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( data => data.json())
        .then( results => {
            setGroceries(results);
            console.log(results);
        })
        .catch(console.error);
    };

    const groceryListMapper = () => {
        console.log(`ENTERED groceryListMapper`);
        if (groceries.length > 0) {
            return groceries.map((item, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.ingredient}</td>
                        <td>{item.quantity}</td>
                    </tr>
                )
            })
        } else {
        console.log("There are no groceries to map")
        }
    }
    
    useEffect(() => {
        fetchGroceryList();
    }, [props.token, props.groceryList])
    
   
    const editGroceryList = (listo) => {
        setGroceryListToUpdate(listo);
        console.log(listo);
    }
   
    return (
        <Container>
            <Row>
                <Col md='12'>
                    <GroceryListGet
                        token={props.token}
                        groceryList={groceryList}
                        groceryListMapper={groceryListMapper} />
                </Col>
                <Col md='12'>
                    <GroceryListCreate
                        token={props.token} />
                </Col>
                <Col md='6'>
                    <GroceryListUpdate
                        groceryListToUpdate={groceryListToUpdate}
                        token={props.token} />
                </Col>
            </Row>
        </Container>
    )
};

export default GroceryListIndex;