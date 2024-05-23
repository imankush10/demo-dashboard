import React from "react";
import Box from "./Box";
import { IoIosRocket } from "react-icons/io";
import { FaGear, FaAngular } from "react-icons/fa6";
import SmallBox from "./SmallBox";

const Main = ({ hoveredMenu, onHover, onLeave }) => {
  return (
    <div className="flex relative w-full">
      {hoveredMenu === "newCoreAssistant" && (
        <div
          className="text-[15px] absolute top-0 -left-16 mt-4 bg-white rounded-lg border border-gray-200 shadow-lg z-10 dark:bg-zinc-800 dark:text-white dark:border-none "
          onMouseEnter={() => onHover("newCoreAssistant")}
          onMouseLeave={() => onLeave("newCoreAssistant")}
        >
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>Submenu Item 1</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>Submenu Item 2</h1>
          </div>
        </div>
      )}
      {hoveredMenu === "uiElements" && (
        <div
          className="text-[15px] absolute top-52 -left-16 mt-4 bg-white border rounded-lg border-gray-200 shadow-lg z-10 dark:bg-zinc-800 dark:text-white dark:border-none "
          onMouseEnter={() => onHover("uiElements")}
          onMouseLeave={() => onLeave("uiElements")}
        >
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>UI Element 1</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>UI Element 2</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>UI Element 3</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>UI Element 4</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>UI Element 5</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 rounded-lg transition-all dark:hover:text-black dark:hover:bg-white">
            <h1>UI Element 6</h1>
          </div>
        </div>
      )}
      {hoveredMenu === "extendedUI" && (
        <div
          className="text-[15px] absolute top-60 -left-16 mt-4 bg-white border border-gray-200 shadow-lg z-10 dark:bg-zinc-800 dark:text-white dark:border-none rounded-lg"
          onMouseEnter={() => onHover("extendedUI")}
          onMouseLeave={() => onLeave("extendedUI")}
        >
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>Extended UI 1</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>Extended UI 2</h1>
          </div>
        </div>
      )}
      {hoveredMenu === "forms" && (
        <div
          className="text-[15px] absolute top-[280px] -left-16 mt-4 bg-white border border-gray-200 shadow-lg z-10 dark:bg-zinc-800 dark:text-white dark:border-none rounded-lg"
          onMouseEnter={() => onHover("forms")}
          onMouseLeave={() => onLeave("forms")}
        >
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>Forms 1</h1>
          </div>
          <div className="px-8 py-2 hover:bg-gray-200 cursor-pointer hover:scale-110 transition-all rounded-lg dark:hover:text-black dark:hover:bg-white">
            <h1>Forms 2</h1>
          </div>
        </div>
      )}
      <div>
        <div className="py-10 pt-9 pb-3 ml-5 px-3 w-[97%] flex flex-col justify-center gap-2 mt-4 bg-white rounded shadow-gray-200 shadow-md dark:bg-neutral-900 dark:text-white transition-all dark:shadow-neutral-900">
          <h1 className="text-3xl font-semibold">
            Rapidly build stunning Web Apps with Sneat 🚀
          </h1>
          <h1 className="font-semibold">
            Developer friendly, Highly customizable & carefully crafted HTML,
            Admin Dashboard Templates
          </h1>
        </div>
        <div className="ml-2  gap-5 grid grid-cols-3 p-3 w-fit">
          <Box
            icon={<IoIosRocket color="red" size={30} />}
            heading="Quick Start"
            desc="Jump-start your development using this amazing theme. Use HTML snippet to quickly start and easily setup Theming, Styling and RTL support"
            btn="Start now"
          />
          <Box
            icon={<FaGear color="red" size={30} />}
            heading="Customize Easily😍"
            desc="Customizable Smart layouts using TemplateCustomizer settings in the config.js files without touching single line of code.✌️"
            btn="Configure it"
            pro="true"
          />
          <Box
            icon={<FaAngular color="red" size={30} />}
            heading="Template Customizer"
            desc="Lorem ipsum dolor sit amet, sed idunt m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            btn="Read more"
            pro="true"
          />
          <Box
            icon={<IoIosRocket color="red" size={30} />}
            heading="Quick Start"
            desc="Jump-start your development using this amazing theme. Use HTML snippet to quickly start and easily setup Theming, Styling and RTL support"
            btn="Start now"
          />
          <Box
            icon={<FaGear color="red" size={30} />}
            heading="Customize Easily😍"
            desc="Customizable Smart layouts using TemplateCustomizer settings in the config.js files without touching single line of code.✌️"
            btn="Configure it"
          />
          <Box
            icon={<FaAngular color="red" size={30} />}
            heading="Template Customizer"
            desc="Lorem ipsum dolor sit amet, sed idunt m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            btn="Read more"
            pro="true"
          />
        </div>
      </div>
      
      <div className="mt-24 ml-2 flex flex-col gap-5">
        <SmallBox
          icon="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/chart-success.png"
          heading="Profit"
          price="12,628"
          percentage="72.80"
        />
        <SmallBox
          icon="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/wallet-info.png"
          heading="Sales"
          price="12,628"
          percentage="72.80"
        />
        <SmallBox
          icon="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/paypal.png"
          heading="Payments"
          price="2,456"
          percentage="-14.82"
        />
      </div>
    </div>
  );
};

export default Main;
