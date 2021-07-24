import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button,  CardImg} from 'reactstrap';

const groceryResults = (props) => {
    const [events, setEvents] = useState([]);

    return (
        <div>
            <br />
            <h2>Checkout these Recipes!</h2>
            <br />

            <Card>
                {events.map((event, index) => {
                    return (
                        <Card key={index}>
                            <CardImg src={event.hits.image} alt="picture of food" />
                            <CardBody>
                                <CardTitle>{event.hits.label}</CardTitle>
                                <CardText>{event.hits.ingredientLines}</CardText>
                                <Button
                                    href={event.hits.url} target="_blank" rel="noreferrer">
                                        Go to Recipe for More Info!
                                    </Button>
                            </CardBody>
                        </Card>
                    )
                })}
                 <p>
                <small>
                    Recipes sourced from: <a href="https://developer.edamam.com/edamam-recipe-api" target="_blank" rel="noreferrer">Edamam API</a>
                </small>
            </p>
            </Card>
            <br />
        </div>
    )
}

export default groceryResults;