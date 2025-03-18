import { InventoryProvider } from './context/InventoryContext';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import './styles/App.css'
import './styles/responsive.css'


function App() {
  return (
    <InventoryProvider>
      <Home />
      <Inventory />
    </InventoryProvider>
  )
}

export default App
