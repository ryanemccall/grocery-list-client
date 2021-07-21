import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const GroceryListCreate = (props) => {
    const [ingredient, setIngredient] = useState('');
    const [quantity, setQuantity] = useState();

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log("Hey you work?")
        fetch('http://localhost:3000/grocery/', {
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
        <>
            <h3>Add to Grocery List</h3>
            
            <small className="text-muted">
                Need milk and eggs or chocolate and red wine? Tell Listo what you need and it will populate a grocery list for you.
            </small>
            
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
                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
}

export default GroceryListCreate;