//I DO NOT THINK WE NEED THIS FILE ANYMORE AS IT WILL EXIST IN THE GROCERYLISTINDEX FILE INSTEAD --RYAN

// Kinda wanna push back a bit - separation of concerns. A small collection of files that clearly do different things, versus one file with All The Things. That also allows us to work in separate files and commit without creating merge conflicts in the one megafile.  --SHANNON

import React from 'react';
import { Table } from 'reactstrap';

const GroceryListGet = (props) => {

    
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
                    {props.groceryListMapper()}
                </tbody>
            </Table>
        </>
    )
}

export default GroceryListGet;