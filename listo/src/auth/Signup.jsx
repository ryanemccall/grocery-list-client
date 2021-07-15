import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


//login and signup forms contain the same info, but differ in their titles and the action they initiate with server when a successful user account is made.


const Signup = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
       // if (email !== " " && password !== " ") {
            fetch("http://localhost:3000/user/register", {
                method: "POST", 
                body: JSON.stringify(
                    { user: { email: email, password: password } }),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
                .then((response) => response.json())
                .then((data) =>
                //takes the session token from the response and passes it to the updatetoken object
                {
                    console.log(data);
                    props.updateToken(data.sessionToken)
                    console.log("Molto bene. You've signed up. Let's get cookin good lookin.") })
        //} else {
           // window.alert("Username and password are required.")
        //};
    };
    
    //this is our own return 
    return (

<div>
<h1>Create an Account</h1>

   <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    
                    <Label htmlFor="email">Email</Label>
                <Input
                    name="email"
                    //target is the target element of the event-in this case, the input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">The Secret Sauce (Password)</Label>
                <Input
                    name="password"
                    //callback functions, being called within the onChange event handlers, are called with an 'event' object as an argument.  This is default behavior to any event handler.  Digging into these event objects let us grab hold of the input data the user has typed
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}/>
                </FormGroup>
            
                <Button type="submit"> Presto! </Button>
            </Form>
            </div>
    );
};

export default Signup;