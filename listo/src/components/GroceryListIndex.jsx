import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = (props) => {
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
                <Col md='12'>
                        <GroceryListGet token={props.token} groceryList={groceryList} /> 
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <GroceryListCreate token={props.token} />
                </Col>
            </Row>
            <Row>
                
                <Col md='6'>
                    <GroceryListUpdate groceryList={groceryList} editGroceryList={editGroceryList} token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
};

export default GroceryListIndex;

