import { useState } from "react";

import Header from "./components/Layout/Header";
import CartProvider from './store/CartProvider';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const shownCartHandler = () => {
      setCartIsShown(true);
    };

    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={shownCartHandler}/>
        <main>
            <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
