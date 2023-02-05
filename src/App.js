import React from "react";
import "./App.css";
import NavbarMenu from "./components/navbar"
// import CardGrid from "./components/CardGrid"
import Hero from "./components/hero"
// import Globe from "./components/globe"
import TodoApp from "./components/discord"
import Game from "./components/tiktaktoe"
import About from "./components/about"
import ProductGrid from "./components/productgrid"
import TwitterClone from "./components/twiter";

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product 1",
        description: "This is the first product",
        price: 10,
        image: "https://via.placeholder.com/300x200",
        quantity: 0
      },
      {
        id: 2,
        name: "Product 2",
        description: "This is the second product",
        price: 20,
        image: "https://via.placeholder.com/300x200",
        quantity: 0
      },
      {
        id: 3,
        name: "Product 3",
        description: "This is the third product",
        price: 30,
        image: "https://via.placeholder.com/300x200",
        quantity: 0
      },
    ],
    cart: [],
  };

  addToCart = (product) => {
    const newCart = [...this.state.cart];
    let existingProduct = newCart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity + 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  handleQuantityChange = (product, event) => {
    const newProducts = [...this.state.products];
    const targetProduct = newProducts.find(p => p.id === product.id);
    targetProduct.quantity = event.target.value;
    this.setState({ products: newProducts });
  };

  getTotalPrice = () => {
    return this.state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  render() {
    return (
      <div className="App">
        <NavbarMenu cart={this.state.cart} totalPrice={this.getTotalPrice()} />
        <Hero />
        <About />
        {/* <CardGrid /> /}
{/ <Globe/> */}
        <TodoApp />
        <Game />
        <div className="container">
          <h1>Shopping Cart</h1>
          <ProductGrid
            products={this.state.products}
            addToCart={this.addToCart}
            onQuantityChange={this.handleQuantityChange}
          />
        </div>
        <TwitterClone/>
      </div>
    );
  }
}
export default App;
