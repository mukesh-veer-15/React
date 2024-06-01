import React from 'react';
import { Card } from "react-bootstrap";

const Post2: React.FC = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src="https://lastmomenttuitions.com/wp-content/uploads/2021/05/Data-Structure-and-Algorithm.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Data Structure</Card.Title>
                <Card.Text>
                    The word Algorithm means “a process or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore, Algorithm refers to a set of
                    rules/instructions that step-by-step define how a work is to be executed in order
                    to get the expected results.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post2;
