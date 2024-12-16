import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { getServerData } from "../hooks/shopApiHandle.tsx";

import companyLogo from "../assets/header/logo.svg";
import langLogo from "../assets/header/lang.svg";
import favLogo from "../assets/header/favorites.svg";
import searchLogo from "../assets/header/search.svg";
import telLogo from "../assets/header/tel.svg";
import cartLogo from "../assets/header/cart.svg";
import userLogo from "../assets/header/user.svg";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filterResult, setFilterResult] = useState([]);
    const [serverData, setServerData] = useState([]);


    useEffect(() => {
        getServerData().then((data) => setServerData(data));
    }, []);


    useEffect(() => {
        if (serverData.length > 0) {
            const filtered = serverData.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterResult(filtered);
        }
    }, [searchValue, serverData]);

    const toggleSearchBackDrop = async (e) => {
        const backdropM = document.querySelector(".backdropModal");

        if (e.target === backdropM) {
            await animate(backdropM, { opacity: 0 });
            setOpen(!isOpen);
        }
    };

    const toggleSearch = () => setOpen(!isOpen);


    const FilterOutput = ({ data }) => {
        return data.map((item) => (
            <li
                key={item.id}
                className="p-2 bg-zinc-800 rounded flex flex-row text-center items-center transition transform hover:-translate-y-3"
            >
                <img src={item.image} className="max-w-36 max-h-fit" alt="" />
                <h1 className="px-4">{item.title}</h1>
            </li>
        ));
    };

    return (
        <header className="bg-black text-white">
            {isOpen && (
                <div
                    className="bg-black bg-opacity-50 w-full h-full fixed flex justify-center items-center backdropModal x-100"
                    onClick={toggleSearchBackDrop}
                >
                    <motion.div
                        transition={{ duration: 0.2 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        className="bg-zinc-900 w-96 flex justify-center rounded flex-col opacity-0 modal"
                    >
                        <label>
                            <input
                                type="text"
                                value={searchValue}
                                placeholder="Search..."
                                className="w-full h-14 bg-transparent focus:outline-none p-4"
                                autoFocus
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <div className="border-b-2 mx-7 rounded border-b-zinc-800"></div>
                        </label>

                        <div className="flex justify-center items-center content-center flex-col min-h-40 border-transparent border-2 overflow-y-auto max-h-96 my-2 ">
                            <ul className="h-96 grid grid-cols-1 gap-4 m-4 ">

                                <FilterOutput data={filterResult} />

                            </ul>
                        </div>
                        <div className="border-t-zinc-800 border-t-2 rounded mx-7"></div>

                        <div className="flex justify-center items-end float-right flex-col p-4 opacity-35">
                            <img
                                src={companyLogo}
                                className="w-36"
                                onClick={() => console.log(serverData)}
                                alt=""
                            />
                        </div>
                    </motion.div>
                </div>
            )}

            <div className="p-36 pt-4 pb-4 flex items-center justify-around">
                <div className="flex flex-row gap-10">
                    <a href="">
                        <img src={langLogo} alt="Language" className="cursor-pointer" />
                    </a>
                    <a href="">
                        <img src={telLogo} alt="Contacts" className="cursor-pointer" />
                    </a>
                    <h2 className="flex gap-4 transition-all">
                        <img
                            src={searchLogo}
                            alt="Search"
                            className="cursor-pointer"
                            onClick={toggleSearch}
                        />
                    </h2>
                </div>

                <img src={companyLogo} alt="" />

                <div className="flex flex-row gap-10">
                    <a href="">
                        <img src={userLogo} alt="User" className="cursor-pointer" />
                    </a>
                    <a href="">
                        <img src={favLogo} alt="Favorites" className="cursor-pointer" />
                    </a>
                    <a href="">
                        <img src={cartLogo} alt="Cart" className="cursor-pointer" />
                    </a>
                </div>
            </div>
            <section className="flex justify-center gap-10 pb-4">
                <button className="hover:underline">Головна</button>
                <button className="hover:underline">Каталог</button>
                <button className="hover:underline">Покупцям</button>
                <button className="hover:underline">Контакти</button>
            </section>
        </header>
    );
};

export default Header;
