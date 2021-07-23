import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const GroceryListCreate = (props) => {
    const [ingredient, setIngredient] = useState('');
    const [quantity, setQuantity] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hey you work?")
        fetch('http://localhost:3000/grocery/', {
            method: 'POST',
            body: JSON.stringify({grocery: {ingredient: ingredient, quantity: quantity}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`  //May need Bearer he
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
            <div className="container">

                <h2>Add to Grocery List</h2>
                
                <p>
                        Is it a milk and eggs kind of trip or chocolate and red wine?
                        <br></br>Just tell Listo what you need and it will create a grocery list for you.
                        <br></br>
                        <br></br>
                </p>
            
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="ingredient" />
                        <Input name="ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="quantity" />
                        <Input name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                    <Input
                        type="number"
                        name="quantity"
                        min="1"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />
                </FormGroup>
                <br></br>
                <Button id="submitBtn" size="lg" type="submit">Add to List</Button>
                </Form>
                 </div>
        </>
    )
}

export default GroceryListCreate;