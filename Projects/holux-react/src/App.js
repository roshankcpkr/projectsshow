import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Logo from "./components/logos/Logo";
import Popular from "./components/popular/Popular";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Logo />
      <Popular />
    </div>
  );
}

export default App;
