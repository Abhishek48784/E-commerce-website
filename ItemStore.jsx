import React from 'react';
import Item from './Item';
import { Scrollbars } from "react-custom-scrollbars-2";

import { products } from "./products";

export default function ItemStore({addToCart}) {
    let myStyle = {
        minHeight: "40vh",
        margine: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <Scrollbars>
                {products.map((item) => {
                    return (
                        <Item item={item} key={item.id} addToCart={addToCart} />
                    );
                })}
            </Scrollbars>
        </div>
    );
}