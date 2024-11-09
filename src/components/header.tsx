import '../input.css';


import companyLogo from "../assets/header/logo.svg" // Company Logo (Glowen)
import langLogo from "../assets/header/lang.svg" // Language Logo 
import favLogo from "../assets/header/favorites.svg" // Favorites Logo
import searchLogo from "../assets/header/search.svg" // Search Logo
import telLogo from "../assets/header/tel.svg" // Contacts/Telephone Logo
import cartLogo from "../assets/header/cart.svg" // Cart Logo
import userLogo from "../assets/header/user.svg" // User Account Logo

const Header = () => {
    console.info( "%c HEADER LOADED ✅", "color: white; background-color: blue; font-size: 16px; padding: 4px; border-radius: 8px;" );
    
    return (
      <header className=" bg-black text-white grid grid-flow-col items-center justify-between p-36 pt-4 pb-4">
        <div className="grid grid-flow-col gap-9">
          <a href="">
           <img src={langLogo} alt="Language" className="cursor-pointer"/>
          </a>
          <a href="">
           <img src={telLogo} alt="Contacts" className="cursor-pointer"/>
          </a>
          <a href="">
           <img src={searchLogo} alt="Search" className="cursor-pointer"/>
          </a>
        </div>

        <img src={companyLogo} alt="" className="" /> {/*Company Logo Here */}

        <div className="grid grid-flow-col gap-9">
          <a href="">
            <img src={userLogo} alt="User" className="cursor-pointer"/>
          </a>
          <a href="">
            <img src={favLogo} alt="Favorites" className="cursor-pointer"/>
          </a>
            <a href="">
          <img src={cartLogo} alt="Cart" className="cursor-pointer"/>
          </a>
        </div>
      </header>
    )
}

export default Header