import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from "./Signup"
import Login from "./Login"

const ValidateSession = (props) => {
    return (
        <div className="container">
        <Container>
            <Row>
                <Col md='7'>
                    <Signup
                        //grabbing token method from App.js
                            updateToken={props.updateToken}
                            username={props.username}
                    />
                </Col>
                <Col md='7'>
                    <Login
                        //grabbing token method from app.js
                        updateToken={props.updateToken}
                    />
                </Col>
            </Row>
            </Container>
            </div>
    );
};

export default ValidateSession;
