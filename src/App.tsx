
import logo from "./assets/logo.svg"

const App = () => {
  console.info( "%c APP LOADED ✅", "color: white; background-color: blue; font-size: 16px; padding: 4px; border-radius: 8px;" );

  return (
    <header className="bg-black text-white flex items-center">
  <ul className="flex">
    <li>language</li>
    <li>tel</li>
    <li>search</li>
  </ul>
  <img src={logo} alt="Logo" className=" fill-black"/>
  <ul className="flex">
    <li>account</li>
    <li>favorites</li>
    <li>cart</li>
  </ul>
</header>
)
}

export default App;