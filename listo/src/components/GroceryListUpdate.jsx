import React, {useState} from "react";


const GroceryListUpdate = (props) => {
    console.log(props);
    const [editIngredient, setEditIngredient] = useState(props.groceryListToUpdate.ingredient);
    const [editQuantity, setEditQuantity] = useState(props.groceryListToUpdate.quantity);

    const groceryListEdit = (e, groceryList) => {
        e.preventDefault();
        fetch(`http://localhost:3000/grocery/update/${props.groceryListToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({grocery: {ingredient: editIngredient, quantity: editQuantity}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => {
            props.fetchGroceryList(); //THIS WILL BE WHATEVER WE CALL THE GET ENDPOINT IN GroceryListGet.JSX (SHANNONS ENDPOINT)
            // props.updateOff(); //IF WE WANT TO HAVE AN UPDATE INFORMATION BE A POP UP WINDOW LIKE IN WOKROUT OUT LOG WE WILL NEED THIS
            //Otherwise, if we want to make look different we will have to research some other looks for the update. 
        })
    }
    return (
        <div>
            <h1> Hello World</h1>
        </div>
)
};

export default GroceryListUpdate;