//I DO NOT THINK WE NEED THIS FILE ANYMORE AS IT WILL EXIST IN THE GROCERYLISTINDEX FILE INSTEAD --RYAN

// import React, { useState, useEffect } from 'react';
// import { Table, Button } from 'reactstrap';
// // import GroceryListUpdate from "./GroceryListUpdate";
// // import GroceryListDelete from "./GroceryListDelete";

// const GroceryListGet = (props) => {

//     const [groceries, setGroceries] = useState([]);

//     const fetchGroceryList = () => {
//         fetch('http://localhost:3000/grocery', {
//             method: 'GET',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${props.token}`
//             })
//         }).then( data => data.json())
//         .then( results => {
//             setGroceries(results);
//             console.log(results);
//         })
//         .catch(console.error);
//     };
//     // const groceryListMapper = () => {
//     //     console.log(`ENTERED groceryListMapper`);
//     //     return groceries.map((item, index) => {
//     //         return(
//     //             <tr key={index}>
//     //                 <th scope="row">{item.id}</th>
//     //                 <td>{item.ingredient}</td>
//     //                 <td>{item.quantity}</td>
//     //                 <td>
//     //                     <Button color="info" onClick={() => {props.editGroceryList(); props.updateOn()}}>Update</Button>
//     //                     <Button outline color="danger" onClick={() => {props.deleteGroceryList()}}>Delete</Button>
//     //                 </td>
//     //             </tr>
//     //         )
//     //     })
//     // }

    
//     useEffect(() => {
//         fetchGroceryList();
//     }, [props.token, props.groceryList])
    
//     //doesn't seem to matter if  'Bearer '+props.token  is used in the tokens below or not. Attempts to update result in a 404 at WorkoutEdit.js line 11
    
//     return(
//         <>
//             <h3>My Grocery List</h3>
//             <hr />
//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Ingredient</th>
//                         <th>Quantity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {groceryListMapper()}
//                 </tbody>
//             </Table>
//         </>

//     )
    
// }

// export default GroceryListGet;