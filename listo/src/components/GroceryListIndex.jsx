import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
//import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = (props) => {
    const [groceryList, setGroceryList] = useState([]);
    const [updatePop, setUpdatePop] = useState(false);
    const [groceryListToUpdate, setGroceryListToUpdate] = useState({});
    const [groceryListToDelete, setGroceryListToDelete] = useState({});
    

    const fetchGroceryList = () => {
        fetch('http://localhost:3000/grocery', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( data => data.json())
        .then( results => {
            setGroceryList(results);
            console.log(results);
        })
        .catch(console.error);
    };
   
    const editGroceryList = (listo) => {
        setGroceryListToUpdate(listo);
        console.log(listo);
    }

    const deleteGroceryList = (listo) => {
        setGroceryListToDelete(listo);
        console.log(listo);
    }

    //Ryan--Adding this to control the Pop Up Modal for the Update feature of the App
    const updateOn = () => {
        setUpdatePop(true);
    }
   
    const updateOff = () => {
        setUpdatePop(false);
    }

    useEffect(() => {
        fetchGroceryList()
    }, [props.token, props.groceryList])
    return (
        <Container>
            <Row>
                 <Col md='12'>
                    <GroceryListCreate fetchGroceryList={fetchGroceryList} token={props.token}/> 
                </Col>
                <Col md='12'>
                    <GroceryListDelete 
                    editGroceryList={editGroceryList} 
                    updateOn={updateOn} 
                    fetchGroceryList={fetchGroceryList}
                    groceryList={groceryList} 
                    deleteGroceryList={deleteGroceryList}
                    token={props.token} 
                    />
                </Col>
                {updatePop ? <GroceryListUpdate groceryListToUpdate={groceryListToUpdate}
                updateOff={updateOff} token={props.token} fetchGroceryList={fetchGroceryList} /> : <></> }
            </Row>
        </Container>
    )
};

export default GroceryListIndex;