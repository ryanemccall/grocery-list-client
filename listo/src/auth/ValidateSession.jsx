import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from "./Signup"
import Login from "./Login"

const ValidateSession = (props) => {
    return (
        <Container>
            <Row>
                <Col md='6'>
                    <Signup
                        //grabbing token method from App.js
                        updateToken={props.updateToken}
                    />
                </Col>
                <Col md='6' className="login-col">
                    <Login
                        //grabbing token method from app.js
                        updateToken={props.updateToken}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ValidateSession;
