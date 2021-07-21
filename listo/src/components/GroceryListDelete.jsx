import React, { useState } from "react";
import { Button, Table } from "reactstrap";

const GroceryListDelete = (props) => {
    // const [groceries, setGroceries] = useState([]);
    const deleteGroceryList = (listo) => {
        if(window.confirm('Are you sure?')){
            fetch(`http://localhost:3000/grocery/delete/${listo.id}`, {
                method: 'DELETE',
                headers: new Headers({ 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                })
            })  
            .then(() => props.fetchGroceryList()) 
        }
    }

    const groceryListMapper = () => {
        // console.log(`ENTERED groceryListMapper`);
        return props.groceryList.map((listo, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{listo.id}</th>
                    <td>{listo.ingredient}</td>
                    <td>{listo.quantity}</td>
                    <td>
                        <Button color="info" onClick={() => {props.editGroceryList(listo); props.updateOn()}}>Update</Button>
                        <Button outline color="danger" onClick={() => {deleteGroceryList(listo)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return ( 
        <>
        <h3>My Grocery List</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {groceryListMapper()}
            </tbody>
        </Table>
    </>

)
};

export default GroceryListDelete;