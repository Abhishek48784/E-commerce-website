import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Item({item, addToCart}) {

    return (
        <div className="display-item">
            <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}<br/>
                        ₹{item.price}
                    </Card.Text>
                    <button className="btn btn-success" onClick={()=>{addToCart(item)}}>Add to cart</button>
                </Card.Body>
            </Card>
        </div>
    );
}