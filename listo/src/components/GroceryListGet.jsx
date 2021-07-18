import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

const GroceryListGet = (props) => {

    const [groceries, setGroceries] = useState([]);

console.log(props.token);
console.log(props);
    const fetchGroceryList = async () => {
        return fetch('http://localhost:3000/grocery/', {
            method: 'GET',
            mode: 'no-cors',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${props.token}`
            }),
        })
        .then(data => data.json())
        .then(results => {
            setGroceries(results);
            console.log(`RESULTS: ${results}`);
            })
        .catch(console.error);
    };



    const groceryListMapper = () => {
        console.log(`ENTERED groceryListMapper`);
        return groceries.map((item, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.ingredient}</td>
                    <td>{item.quantity}</td>
                </tr>
            )
        })
    }


    useEffect(() => {
        fetchGroceryList();
    }, [props.token])
    
    //doesn't seem to matter if  'Bearer '+props.token  is used in the tokens below or not. Attempts to update result in a 404 at WorkoutEdit.js line 11
    

    return(
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
    
}

export default GroceryListGet;