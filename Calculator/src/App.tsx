import { Calculator } from "./components/Calculator"
import Background from './videos/AnimatedBackground.mp4'

function App() {
  return (
    <div className="relative w-full h-screen font-roboto">
      <video autoPlay playsInline controls={false} style={{ pointerEvents: 'none' }} muted loop className="absolute w-full h-full z-0 inset-0 object-cover" src={Background}/>
      <div className="h-full w-full bg-black/20 absolute z-0"></div>
      <Calculator />
    </div>
  )
}

export default App
