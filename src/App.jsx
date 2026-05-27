import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {

  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">

      {!showProducts ? (

        <div className="content">
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Paradise Nursery brings beautiful plants to your home.
          </p>

          <button
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>

      ) : (

        <ProductList />

      )}

    </div>
  );
}

export default App;
