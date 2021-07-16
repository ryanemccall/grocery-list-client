import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = () => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryListUpdate, setGroceryListUpdate] = useState({});
    

    const editGroceryList = (listo) => {
        setGroceryListUpdate(listo);
        console.log(listo);
    }
//fetchGroceryList() will be the GET Endpoint Function
    return (
        <Container>
            <Row>
                <Col md='3'>
                    <GroceryListCreate fetchGroceryList={fetchGroceryList} token={props.sessionToken}/> 
                </Col>
                <Col md='6'>
                    <GroceryListUpdate groceryList={groceryList} editGroceryList={editGroceryList} token={props.sessionToken}/>
                </Col>
            </Row>
        </Container>
    )
};

export default GroceryListIndex;

