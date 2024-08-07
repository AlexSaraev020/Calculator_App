import { Calculator } from "./components/Calculator"
import Background from './images/office_background.webp'

function App() {
  return (
    <div className="relative w-full h-screen">
      <img className="absolute w-full h-full z-0 inset-0 object-cover" src={Background} alt="Background Image" />
      <Calculator />
    </div>
  )
}

export default App
