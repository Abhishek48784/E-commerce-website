import React,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/About";
import ItemStore from "./components/ItemStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  const addToCart = (item) => {
    const myItem = {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      img: item.img,
      quantity: item.quantity
    }
    setItemArr([...itemArr,myItem]);
  }
  const [itemArr, setItemArr] = useState([]);
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div className="Home">
                <Header />
                <ItemStore addToCart={addToCart} />
                <Footer />
              </div>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path="/cart">
            <Cart newItem={itemArr} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

