import React from 'react';
import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    
    //Even though we could grab the values of these input fields without state variables, whenever manipulable information on your webpage is uncontrolled by React, it's an opportunity for bugs to arise in your program.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //if (username !== " " && password !== " ") {
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify(
                { user: { email: email, password: password } }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then((res) => res.json())
            .then((data) =>
                //takes the session token from the response and passes it to the updatetoken object
            {
                props.updateToken(data.sessionToken);
                console.log("Bravo - you're logged in. Let's get cookin good lookin.")
            })
            .catch((error) => {
            console.log(error.message)
            })
        
        //} else {
            //window.alert("Username and password are required.")
        //};
    };
    
    return (
        <div>
            <h1>Log In</h1>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    
                    <Label htmlFor="email">Email</Label>
                    <Input
                        name="email"
                        placeholder="yeschef@email.com"
                        type="email"
                        aria-required="true"
                        required="true"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}     
                   />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        name="password"
                        placeholder="the secret sauce"
                        type="text"
                        aria-required="true"
                        required="true"
                        minLength="6"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </FormGroup>
             <br>
            </br>
                <Button type="submit"> Get Cookin
                </Button>
            </Form>
            <br>
            </br>
        </div>
    );
};

export default Login;