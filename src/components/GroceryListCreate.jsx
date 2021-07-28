import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';

const GroceryListCreate = (props) => {
    const [ingredient, setIngredient] = useState('');
    const [quantity, setQuantity] = useState();

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log("Hey you work?")
        fetch(`${APIURL}/grocery/`, {
            method: 'POST',
            body: JSON.stringify({grocery: {ingredient: ingredient, quantity: quantity}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`  //May need Bearer here
            })
        }).then( (res) => res.json())
        .then((groceriesData) => {
            console.log('GROCERIES DATA '+ groceriesData);
            setIngredient('');
            setQuantity();
            props.fetchGroceryList(); 
        })
    }

    return (
        
            <div className="container">
           
            <h2>Add to Grocery List</h2>
            
            <p>
                    Is it a milk and eggs kind of trip or chocolate and red wine?  Just tell Listo what you need and it will create a grocery list for you.
                    <br></br>
                    <br></br>
            </p>
        
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label
                        className="form-label"
                        htmlFor="ingredient">Ingredient</Label>
                    <Input
                        type="text"
                        placeholder="poison - I mean - potatoes"
                        name="ingredient"
                        required
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label
                        className="form-label"
                        htmlFor="quantity">Quantity</Label>
                    <br></br>
                    <Input
                        type="number"
                        name="quantity"
                        min="1"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />
                </FormGroup>
                <br></br>
                <Button id="submitBtn" size="md" type="submit">Add to List</Button>
                </Form>
                 </div>
        
    );
}

export default GroceryListCreate;