//import React, { useState } from "react";
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
        if (props.groceryList.length > 0) {

            return props.groceryList.map((listo, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{listo.id}</th>
                        <td>{listo.ingredient}</td>
                        <td>{listo.quantity}</td>
                        <td>
                            <Button
                                id="btn-update"
                                onClick={() => { props.editGroceryList(listo); props.updateOn() }}>Update</Button>
                            
                            <Button
                                id="btn-delete"
                                outline onClick={() => { deleteGroceryList(listo) }}>Remove</Button>
                        </td>
                    </tr>
                )
            })
        }
    }

    return ( 
        <div className="container">
        <h2>My Grocery List</h2>
        <hr />
        <Table hover striped>
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
    </div>

)
};

export default GroceryListDelete;