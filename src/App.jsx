import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { IoAccessibility, IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const App = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [dark, setDark] = useState(false);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = (menu) => {
    setHoveredMenu((prevMenu) => (prevMenu === menu ? null : prevMenu));
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Nav />
      <div className="flex bg-gray-100 dark:bg-black/95 h-screen">
        <Sidebar onHover={handleMouseEnter} onLeave={handleMouseLeave} />
        <Main
          hoveredMenu={hoveredMenu}
          onHover={handleMouseEnter}
          onLeave={handleMouseLeave}
        />
      </div>
      <div className="absolute top-20 right-20 flex w-16 h-8 bg-neutral-700 rounded-full text-white dark:text-black items-center pl-1 dark:bg-white" onClick={()=>setDark(!dark)}>
        <span className="dark:ml-8 ml-0 transition-all">{dark? <IoMoon size={22}/>: <IoSunny size={22}/>}</span>
      </div>
    </>
  );
};

export default App;
