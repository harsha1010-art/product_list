import "./styles.css";
import { useState } from "react";
import initialproducts from "./data";

export default function App() {
  const [products, setProducts] = useState(initialproducts);
  const increment = (id) => {
    const Newproducts = [...products];
    for (let i = 0; i < Newproducts.length; i++) {
      if (Newproducts[i].id === id) Newproducts[i].count += 1;
    }
    setProducts(Newproducts);
  };

  const decrement = () => {
    const increment = (id) => {
      const Newproducts = [...products];
      for (let i = 0; i < Newproducts.length; i++) {
        if (Newproducts[i].id === id) Newproducts[i].count -= 1;
      }
      setProducts(Newproducts);
    };

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>
          {products.map((item) => (
            <div>
              <br />

              <button onClick={() => increment(item.id)}>+</button>
              <p>
                {item.name}({item.count})
              </p>

              <button onClick={decrement(item.id)}>-</button>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  };
}
