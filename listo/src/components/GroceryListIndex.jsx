import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = (props) => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryListToUpdate, setGroceryListToUpdate] = useState({});
   
    const editGroceryList = (listo) => {
        setGroceryListToUpdate(listo);
        console.log(listo);
    }
   
    return (
        <Container>
            <Row>
                <Col md='12'>
                    <GroceryListGet token={props.token} groceryList={groceryList} />
                </Col>
                <Col md='12'>
                    <GroceryListCreate token={props.token}/> 
                </Col>
                <Col md='6'>
                    <GroceryListUpdate groceryListToUpdate={groceryListToUpdate} token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
};

export default GroceryListIndex;