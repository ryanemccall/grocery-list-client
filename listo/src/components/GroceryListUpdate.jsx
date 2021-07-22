import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";

const GroceryListUpdate = (props) => {
    console.log(props)
    const [editIngredient, setEditIngredient] = useState(props.groceryListToUpdate.ingredient);
    const [editQuantity, setEditQuantity] = useState(props.groceryListToUpdate.quantity);
   
    const groceryListEdit = (e, groceryList) => {
        console.log(groceryList);
        // e.preventDefault(); 
        fetch(`http://localhost:3000/grocery/update/${props.groceryListToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({grocery: {ingredient: editIngredient, quantity: editQuantity}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchGroceryList(); //THIS WILL BE WHATEVER WE CALL THE GET ENDPOINT IN GroceryListGet.JSX (SHANNONS ENDPOINT)
            props.updateOff(); 
        })
        .catch(console.error)
    }
    useEffect(() => {
        props.fetchGroceryList();
    }, [props.token, props.groceryList])

    const handleSubmit = (e) => {
        e.preventDefault();
        groceryListEdit();
    }
    //NOTE: In Order to Add Options (Tbs, Cup, Lbs, etc.) we Likely need to add it as something stored on the Server
    return (
        <Modal isOpen={true}>
            <ModalHeader>Update Ingredient and Quantity</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="ingredient" />
                        <Input name="ingredient" value={editIngredient} onChange={(e) => setEditIngredient(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                    <Label htmlFor="quantity" />
                    <Input name="quantity" value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)}/>
                </FormGroup>
                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
)
};

export default GroceryListUpdate;