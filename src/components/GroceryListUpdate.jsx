import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import APIURL from '../helpers/environment';

const GroceryListUpdate = (props) => {
    console.log(props)
    const [editIngredient, setEditIngredient] = useState(props.groceryListToUpdate.ingredient);
    const [editQuantity, setEditQuantity] = useState(props.groceryListToUpdate.quantity);
   
    const groceryListEdit = (e, groceryList) => {
        console.log(groceryList);
        // e.preventDefault(); 
        fetch(`${APIURL}/grocery/update/${props.groceryListToUpdate.id}`, {
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
    //NOTE: In Order to Add Options (Tbs, Cup, Lbs, etc.) we Likely need to add it as something stored on the Server
    return (

        <Modal isOpen={true}>
            <ModalHeader className="modalHeader">Update Your List!</ModalHeader>
            <ModalBody className="modalBody">
                <Form onSubmit={groceryListEdit}>
                    <FormGroup>
                        <Label className="modalLabel" htmlFor="ingredient">Ingredient:</Label>
                        <Input name="ingredient" value={editIngredient} onChange={(e) => setEditIngredient(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                    <Label className="modalLabel" htmlFor="quantity">Quantity:</Label>
                    <Input name="quantity" value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)}/>
                    </FormGroup>
                    <br></br>
                    <Button type="submit"
                    style={{backgroundColor:"#82c787"}}>Update</Button>
                </Form>
            </ModalBody>
        </Modal>
)
};

export default GroceryListUpdate;