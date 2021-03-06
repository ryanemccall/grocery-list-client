import React from 'react';
import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap';
import APIURL from '../helpers/environment';

const Login = (props) => {
    
    //Even though we could grab the values of these input fields without state variables, whenever manipulable information on your webpage is uncontrolled by React, it's an opportunity for bugs to arise in your program.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const displayLoginSpinner = () => {
        document.getElementById("loginSpinner").style.display = "block";
    }

     const hideLoginSpinner = () => {
        document.getElementById("loginSpinner").style.display = "none";
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        displayLoginSpinner();
        //if (username !== " " && password !== " ") {
        fetch(`${APIURL}/user/login`, {
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
                //displays what message the server has programmed
                window.alert(data.message);
                hideLoginSpinner();
                if (data.sessionToken) {
                props.updateToken(data.sessionToken);
                }
            })
            .catch((error) => {
            console.log(error.message)
            })
    };
    
    return (
        <div className="container">
            <h1>Log In</h1>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    
                    <Label
                        className="form-label"
                        htmlFor="email">Email</Label>
                    <Input
                        name="email"
                        placeholder="yeschef@email.com"
                        type="email"
                        aria-required="true"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}     
                   />
                </FormGroup>
                
                <FormGroup>
                    <Label
                        className="form-label"
                        htmlFor="password">Password</Label>
                    <Input
                        name="password"
                        placeholder="the secret sauce"
                        type="text"
                        aria-required="true"
                        required
                        minLength="6"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </FormGroup>
             <br>
            </br>
                <Button
                    className="btn-auth"
                    type="submit"
                    onClick={displayLoginSpinner}
                > Get Cookin
                </Button>
               
                <div id="loginSpinnerDiv">
                <br></br>
                    <Spinner
                    id="loginSpinner"
                    color="#EBD569"
                    type="border"
                    role="status"
                    size="md">
                    <span class="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            </Form>
            <br>
            </br>
        </div>
    );
};

export default Login;