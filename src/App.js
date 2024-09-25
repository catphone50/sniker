import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/cart" element={} />
      <Route path="/contacts" element={} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
