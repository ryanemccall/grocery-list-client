import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const GroceryListCreate = (props) => {
    const [ingredient, setIngredient] = useState('');
    const [quantity, setQuantity] = useState();

    const handleSubmit = (e) => {
        console.log(`from HANDLE SUBMIT - INGREDIENT: ${ingredient}`);
        // e.preventDefault();
        fetch('http://localhost:3000/grocery/', {
            method: 'POST',
            body: JSON.stringify({grocery: {ingredient: ingredient, quantity: quantity}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`  //May need Bearer he
            })
        }).then( (res) => res.json())
        .then( (groceriesData) => {
            console.log('GROCERIES DATA  ' + groceriesData);
            setIngredient('');
            setQuantity();
            // props.fetchGroceryList();
        })
    }

    return (
        <>
            <h3>Need milk? (Or anything else?)</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="ingredient" />
                    <Input name="ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="quantity" />
                    <Input name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default GroceryListCreate;