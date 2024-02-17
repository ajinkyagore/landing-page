import Card from "./components/Card"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"


function App() {

  return (
    <div className="flex flex-col bg-black min-h-svh">
      <NavBar/>
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
