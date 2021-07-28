import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GroceryListUpdate from "./GroceryListUpdate";
import GroceryListDelete from "./GroceryListDelete";
import GroceryListCreate from "./GroceryListCreate";
import APIURL from '../helpers/environment'
//import GroceryListGet from "./GroceryListGet";

const GroceryListIndex = (props) => {
    const [groceryList, setGroceryList] = useState([]);
    const [updatePop, setUpdatePop] = useState(false);
    const [groceryListToUpdate, setGroceryListToUpdate] = useState({});
    const [groceryListToDelete, setGroceryListToDelete] = useState({});
    

    const fetchGroceryList = () => {
        fetch(`${APIURL}/grocery`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }
        ).then( data => data.json())
        .then( results => {
            // Let's alphabetize!
            results.sort(function(a, b) {
                let ingrA = a.ingredient.toUpperCase(); // ignore upper and lowercase for more realistic sorting. Considering a locale sort for diacriticals
                let ingrB = b.ingredient.toUpperCase(); 
                if (ingrA < ingrB) {
                    return -1;
                }
                if (ingrA > ingrB) {
                    return 1;
                }
                // ingredient names are equal
                return 0;
            });
            setGroceryList(results);
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
                {/* //ryan i increased size from 4 to 7 and it jumps less */}
                 <Col md={{ size: 7, order: 1, offset: 1}}>
                    <GroceryListCreate fetchGroceryList={fetchGroceryList} token={props.token}/> 
                </Col>
                <Col md={{ size: 8, order: 2, offset: 2}}>
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