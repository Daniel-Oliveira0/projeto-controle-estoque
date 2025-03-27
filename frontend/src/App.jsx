import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./context/InventoryContext";
import Home from "./pages/Home";
import Tabela from "./pages/Table"; 
import Inventory from './pages/Inventory'
import "./styles/App.css";
import "./styles/responsive.css";

function App() {
  return (
    <InventoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Tabela />} />
        </Routes>
        <Inventory/>
    </InventoryProvider>
  );
}

export default App;
