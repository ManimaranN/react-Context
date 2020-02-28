import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Provider from "./context/Provider";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <h2>react appp for understanding the concept of context</h2>
          <ProductList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
