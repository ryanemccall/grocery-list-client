import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const GroceryListCreate = (props) => {
    const [ingredient, setIngredient] = useState('');
    const [quantity, setQuantity] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/grocery/', {
            method: 'POST',
            body: JSON.stringify({groceries: {ingredient: ingredient, quantity: quantity}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`  //May need Bearer here
            })
        }).then( (res) => res.json())
        .then( (groceriesData) => {
            console.log('GROCERIES DATA '+groceriesData);
            setIngredient('');
            setQuantity();
            props.fetchGroceryList();
        })
    }

    return (
        <>
            {/* <h3>Need milk? (Or anything else?)</h3>
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
            </Form> */}
        </>
    )
}

export default GroceryListCreate;