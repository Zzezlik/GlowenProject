import '../input.css';


import companyLogo from "../assets/header/logo.svg" // Company Logo (Glowen)
import langLogo from "../assets/header/lang.svg" // Language Logo 
import favLogo from "../assets/header/favorites.svg" // Favorites Logo
import searchLogo from "../assets/header/search.svg" // Search Logo
import telLogo from "../assets/header/tel.svg" // Contacts/Telephone Logo
import cartLogo from "../assets/header/cart.svg" // Cart Logo
import userLogo from "../assets/header/user.svg"
import {useEffect, useState} from "react"; // User Account Logo



const Header = () => {

    const [isOpen, setOpen]  = useState(false)


    const  toggleSearchBackDrop  = (e) =>  {
        console.log(e.target)
        const backdropM = document.querySelector(".backdropModal")
        if (e.target === backdropM) {
            console.log(true)
            setOpen(!isOpen);
        }

    }

    const  toggleSearch  = () => setOpen(!isOpen);

    return (
      <header className=" bg-black text-white">


          { isOpen &&
              <div className="z-40 bg-black bg-opacity-50 w-full h-full fixed flex justify-center items-center backdropModal" onClick={toggleSearchBackDrop}>
              <div className="bg-zinc-900 w-96 flex justify-center  rounded flex-col">
                  <label htmlFor="">

                      <input placeholder="Search..." type="search" className=" transition-all focus:outline-none w-full text-2xl bg-zinc-900 border-transparent border-b-zinc-800 border-2 rounded-t p-2"/>
                  </label>


                  <div className="_uploadDiv flex justify-center items-center flex-col pb-28 pt-8 border-transparent border-b-zinc-800 border-2" >

                      <h1 className="text-2xl opacity-50">none</h1>

                  </div>

                  <div className="flex justify-center items-end float-right flex-col p-4">

                        created

                  </div>


              </div>
          </div>
          }

          <div className='  p-36 pt-4 pb-4  flex items-center justify-around'>
        <div className="flex flex-row gap-10">
          <a href="">
           <img src={langLogo} alt="Language" className="cursor-pointer"/>
          </a>
          <a href="">
           <img src={telLogo} alt="Contacts" className="cursor-pointer"/>
          </a>
          <h2 className="flex gap-4 transition-all " >
           <img src={searchLogo} alt="Search" className="cursor-pointer " onClick={toggleSearch}/>
          </h2>
        </div>

        <img src={companyLogo} alt="" className="" /> {/*Company Logo Here */}

        <div className="flex flex-row gap-10">
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
          </div>
          <section className='flex justify-center gap-10 pb-4 '>
              <button className='hover:underline'>Головна</button>
              <button className='hover:underline'>Каталог</button>
              <button className='hover:underline'>Покупцям</button>
              <button className='hover:underline'>Контакти</button>
          </section>

      </header>
    )
}

export default Header