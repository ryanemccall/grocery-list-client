import React from "react";
import { Spinner } from "react";
import ValidateSession from "./ValidateSession";

class Spinners extends ValidateSession {
    
    state = {
    isLoaded: true
    }
    
    handleIsLoadedToggle = () => {
        this.setState(prevState =>
        ({
            isLoaded: !prevState.isLoaded
        }))
    };
    
    render() { 
        return ( 
            <div id="signupSpinnerDiv">
                
                <button onClick={this.handleIsLoadedToggle}>Toggle LoadSpinner</button>
                {this.state.isLoaded && <Spinners />}
                
                <br></br>
                    <Spinner
                    id="signupSpinner"
                    color="#EBD569"
                    type="border"
                    role="status"
                    size="md">
                    <span class="visually-hidden">Loading...</span>
                </Spinner>
        </div>
 );
    }
}
 
export default Spinners;