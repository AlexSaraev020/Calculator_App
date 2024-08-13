import { Calculator } from "./components/Calculator"

function App() {
  return (
    <div className="relative w-full h-screen font-roboto">
      <div className="h-full w-full bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 absolute z-0"></div>
      <Calculator />
    </div>
  )
}

export default App
