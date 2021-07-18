import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GroceryListCreate from './GroceryListCreate';
import GroceryListUpdate from './GroceryListUpdate';

const GroceryListGet = (props) => {

    const [groceries, setGroceries] = useState([]);

    const fetchGroceryList = () => {
        fetch('http://localhost:3000/grocery', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then( (groceriesData) => {
            setGroceries(groceriesData);
            console.log(groceriesData);
        })
    }
 
    
    useEffect(() => {
        fetchGroceryList();
    }, [])
    
    //doesn't seem to matter if  'Bearer '+props.token  is used in the tokens below or not. Attempts to update result in a 404 at WorkoutEdit.js line 11
    
    return (
        <>
        {/* <Container>
            <Row>
                <Col md="12">
                    <GroceryListGet fetchGroceryList={fetchGroceryList} token={props.token} />
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <GroceryListCreate token={props.token} />
                </Col>
            </Row>
        </Container> */}
        </>
    )
    
}

export default GroceryListGet;