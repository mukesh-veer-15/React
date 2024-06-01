import React from 'react';
import { Card } from "react-bootstrap";

const Post1: React.FC = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>JAVASCRIPT</Card.Title>
                <Card.Text>
                    JavaScript is the world’s most popular lightweight, interpreted compiled programming
                    language. It is also known as the scripting language for web pages. It is well-known for
                    the development of web pages, many non-browser environments also use it. JavaScript can be
                    used for Client-side developments as well as Server-side developments.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;
