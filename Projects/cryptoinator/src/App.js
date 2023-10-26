import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CryptoPage from "./components/CryptoPage";
import CoinsPage from "./pages/Coinspage";
// import CryptoContext from "./CryptoContext";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoPage></CryptoPage>} />
          <Route path="/coins/:id" element={<CoinsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
