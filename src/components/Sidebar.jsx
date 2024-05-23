import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
const Sidebar = ({ onHover, onLeave }) => {
  const handleMouseEnter = (menu) => {
    if (onHover) {
      onHover(menu);
    }
  };

  const handleMouseLeave = (menu) => {
    onLeave(menu);
  };

  return (
    <div>
      <div className="border-[2px] mt-3 ml-4 basis-2/12 p-4 h-fit px-8 flex flex-col gap-4 relative dark:border-none dark:shadow-neutral-900 bg-white transition-all dark:bg-neutral-900 dark:text-white">
        <div className="text-[15px] flex flex-col gap-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onMouseEnter={() => handleMouseEnter("newCoreAssistant")}
            onMouseLeave={() => handleMouseLeave("newCoreAssistant")}
          >
            <h1>New Core Assistant </h1>
            <FaAngleRight />
          </div>
          <h1>New Core Menu</h1>
        </div>
        <div>
          <h1 className="font-semibold text-sm mt-2 pb-2">Design Beginners</h1>
          <div className="px-3 text-[15px] flex flex-col gap-2">
            <h1>Typography</h1>
            <h1>Colors</h1>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-sm pb-2">Components</h1>
          <div className="pl-3 text-[15px] flex flex-col gap-2">
            <div
              className="flex items-center justify-between cursor-pointer"
              onMouseEnter={() => handleMouseEnter("uiElements")}
              onMouseLeave={() => handleMouseLeave("uiElements")}
            >
              <h1>UI Elements </h1>
              <FaAngleRight />
            </div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onMouseEnter={() => handleMouseEnter("extendedUI")}
              onMouseLeave={() => handleMouseLeave("extendedUI")}
            >
              <h1>Extended UI </h1>
              <FaAngleRight />
            </div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onMouseEnter={() => handleMouseEnter("forms")}
              onMouseLeave={() => handleMouseLeave("forms")}
            >
              <h1>Forms </h1>
              <FaAngleRight />
            </div>
            <h1>Tables</h1>
            <div className="flex items-center justify-between cursor-pointer">
              <h1>Datatables </h1>
              <h1 className="bg-gray-200 text-blue-600 text-xs dark:text-white transition-all dark:bg-zinc-700 font-semibold flex items-center justify-center w-9 h-6">
                Pro
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-sm mt-2 pb-2">Clearings & Menu</h1>
          <div className="flex items-center justify-between">
            <h1 className="pl-3">Apex Chakra </h1>
            <h1 className="bg-gray-200 text-blue-600 dark:text-white dark:bg-zinc-700 text-xs font-semibold flex items-center justify-center w-9 h-6">
              Pro
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-3 ml-4 border-2 p-5 bg-white shadow-gray-200 dark:shadow-neutral-900 dark:border-none shadow-md dark:bg-neutral-900 dark:text-white">
        <h1>Profile Report</h1>
        <div className="flex justify-between">
          <h1 className="text-xs text-red-400 font-semibold bg-yellow-300/40 w-fit h-fit px-2 py-1 rounded-xl dark:bg-yellow-400 dark:text-red-700">
            YEAR 2024
          </h1>
          <div>
            <h1 className="text-[13px] text-green-500 font-bold mt-2">
              +68.2%
            </h1>
            <h1 className="font-bold text-lg text-gray-700 dark:text-white">$84,696k</h1>
          </div>
        </div>
        <svg
          id="SvgjsSvg1778"
          width="220"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev"
          className="apexcharts-svg"
          xmlnsData="ApexChartsNS"
          transform="translate(0, 0)"
          style={{ background: "transparent" }}
        >
          <g
            id="SvgjsG1780"
            className="apexcharts-inner apexcharts-graphical"
            transform="translate(0, 0)"
          >
            <defs id="SvgjsDefs1779">
              <clipPath id="gridRectMasku2337lq2h">
                <rect
                  id="SvgjsRect1785"
                  width="301"
                  height="85"
                  x="-4.5"
                  y="-2.5"
                  rx="0"
                  ry="0"
                  opacity="1"
                  strokeWidth="0"
                  stroke="none"
                  strokeDasharray="0"
                  fill="#fff"
                ></rect>
              </clipPath>
              <clipPath id="forecastMasku2337lq2h"></clipPath>
              <clipPath id="nonForecastMasku2337lq2h"></clipPath>
              <clipPath id="gridRectMarkerMasku2337lq2h">
                <rect
                  id="SvgjsRect1786"
                  width="296"
                  height="84"
                  x="-2"
                  y="-2"
                  rx="0"
                  ry="0"
                  opacity="1"
                  strokeWidth="0"
                  stroke="none"
                  strokeDasharray="0"
                  fill="#fff"
                ></rect>
              </clipPath>
              <filter
                id="SvgjsFilter1792"
                filterUnits="userSpaceOnUse"
                width="200%"
                height="200%"
                x="-50%"
                y="-50%"
              >
                <feFlood
                  id="SvgjsFeFlood1793"
                  floodColor="#ffab00"
                  floodOpacity="0.15"
                  result="SvgjsFeFlood1793Out"
                  in="SourceGraphic"
                ></feFlood>
                <feComposite
                  id="SvgjsFeComposite1794"
                  in="SvgjsFeFlood1793Out"
                  in2="SourceAlpha"
                  operator="in"
                  result="SvgjsFeComposite1794Out"
                ></feComposite>
                <feOffset
                  id="SvgjsFeOffset1795"
                  dx="5"
                  dy="10"
                  result="SvgjsFeOffset1795Out"
                  in="SvgjsFeComposite1794Out"
                ></feOffset>
                <feGaussianBlur
                  id="SvgjsFeGaussianBlur1796"
                  stdDeviation="3"
                  result="SvgjsFeGaussianBlur1796Out"
                  in="SvgjsFeOffset1795Out"
                ></feGaussianBlur>
                <feMerge
                  id="SvgjsFeMerge1797"
                  result="SvgjsFeMerge1797Out"
                  in="SourceGraphic"
                >
                  <feMergeNode
                    id="SvgjsFeMergeNode1798"
                    in="SvgjsFeGaussianBlur1796Out"
                  ></feMergeNode>
                  <feMergeNode
                    id="SvgjsFeMergeNode1799"
                    in="[object Arguments]"
                  ></feMergeNode>
                </feMerge>
                <feBlend
                  id="SvgjsFeBlend1800"
                  in="SourceGraphic"
                  in2="SvgjsFeMerge1797Out"
                  mode="normal"
                  result="SvgjsFeBlend1800Out"
                ></feBlend>
              </filter>
            </defs>
            <line
              id="SvgjsLine1784"
              x1="291.5"
              y1="0"
              x2="291.5"
              y2="80"
              stroke="#b6b6b6"
              strokeDasharray="3"
              strokeLinecap="butt"
              className="apexcharts-xcrosshairs"
              x="291.5"
              y="0"
              width="1"
              height="80"
              fill="#b1b9c4"
              filter="none"
              fillOpacity="0.9"
              strokeWidth="1"
            ></line>
            <g
              id="SvgjsG1801"
              className="apexcharts-xaxis"
              transform="translate(0, 0)"
            >
              <g
                id="SvgjsG1802"
                className="apexcharts-xaxis-texts-g"
                transform="translate(0, -4)"
              ></g>
            </g>
            <g id="SvgjsG1810" className="apexcharts-grid">
              <g
                id="SvgjsG1811"
                className="apexcharts-gridlines-horizontal"
                style={{ display: "none" }}
              >
                <line
                  id="SvgjsLine1813"
                  x1="0"
                  y1="0"
                  x2="292"
                  y2="0"
                  stroke="#e0e0e0"
                  strokeDasharray="0"
                  strokeLinecap="butt"
                  className="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1814"
                  x1="0"
                  y1="20"
                  x2="292"
                  y2="20"
                  stroke="#e0e0e0"
                  strokeDasharray="0"
                  strokeLinecap="butt"
                  className="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1815"
                  x1="0"
                  y1="40"
                  x2="292"
                  y2="40"
                  stroke="#e0e0e0"
                  strokeDasharray="0"
                  strokeLinecap="butt"
                  className="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1816"
                  x1="0"
                  y1="60"
                  x2="292"
                  y2="60"
                  stroke="#e0e0e0"
                  strokeDasharray="0"
                  strokeLinecap="butt"
                  className="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1817"
                  x1="0"
                  y1="80"
                  x2="292"
                  y2="80"
                  stroke="#e0e0e0"
                  strokeDasharray="0"
                  strokeLinecap="butt"
                  className="apexcharts-gridline"
                ></line>
              </g>
              <g
                id="SvgjsG1812"
                className="apexcharts-gridlines-vertical"
                style={{ display: "none" }}
              ></g>
              <line
                id="SvgjsLine1819"
                x1="0"
                y1="80"
                x2="292"
                y2="80"
                stroke="transparent"
                strokeDasharray="0"
                strokeLinecap="butt"
              ></line>
              <line
                id="SvgjsLine1818"
                x1="0"
                y1="1"
                x2="0"
                y2="80"
                stroke="transparent"
                strokeDasharray="0"
                strokeLinecap="butt"
              ></line>
            </g>
            <g
              id="SvgjsG1787"
              className="apexcharts-line-series apexcharts-plot-series"
            >
              <g
                id="SvgjsG1788"
                className="apexcharts-series"
                seriesName="seriesx1"
                data-longestSeries="true"
                rel="1"
                data-realIndex="0"
              >
                <path
                  id="SvgjsPath1791"
                  d="M 0 76C 20.44 76 37.96000000000001 12 58.400000000000006 12C 78.84 12 96.36000000000001 62 116.80000000000001 62C 137.24 62 154.76000000000002 22 175.20000000000002 22C 195.64000000000001 22 213.16000000000003 38 233.60000000000002 38C 254.04000000000002 38 271.56 6 292 6"
                  fill="none"
                  fillOpacity="1"
                  stroke="rgba(255,171,0,0.85)"
                  strokeOpacity="1"
                  strokeLinecap="butt"
                  strokeWidth="5"
                  strokeDasharray="0"
                  className="apexcharts-line"
                  index="0"
                  clipPath="url(#gridRectMasku2337lq2h)"
                  filter="url(#SvgjsFilter1792)"
                  pathTo="M 0 76C 20.44 76 37.96000000000001 12 58.400000000000006 12C 78.84 12 96.36000000000001 62 116.80000000000001 62C 137.24 62 154.76000000000002 22 175.20000000000002 22C 195.64000000000001 22 213.16000000000003 38 233.60000000000002 38C 254.04000000000002 38 271.56 6 292 6"
                  pathFrom="M -1 120L -1 120L 58.400000000000006 120L 116.80000000000001 120L 175.20000000000002 120L 233.60000000000002 120L 292 120"
                ></path>
                <g
                  id="SvgjsG1789"
                  className="apexcharts-series-markers-wrap"
                  data-realIndex="0"
                >
                  <g className="apexcharts-series-markers">
                    <circle
                      id="SvgjsCircle1825"
                      r="0"
                      cx="292"
                      cy="6"
                      className="apexcharts-marker w4uoimtfz no-pointer-events"
                      stroke="#ffffff"
                      fill="#ffab00"
                      fillOpacity="1"
                      strokeWidth="2"
                      strokeOpacity="0.9"
                      default-marker-size="0"
                    ></circle>
                  </g>
                </g>
              </g>
            </g>
            <g
              id="SvgjsG1781"
              className="apexcharts-yaxis"
              rel="0"
              transform="translate(292, 0)"
            >
              <g id="SvgjsG1783" className="apexcharts-yaxis-texts-g"></g>
            </g>
            <g id="SvgjsG1782" className="apexcharts-annotations"></g>
          </g>
          <rect
            id="SvgjsRect1787"
            width="0"
            height="80"
            x="0"
            y="0"
            rx="0"
            ry="0"
            opacity="1"
            strokeWidth="0"
            stroke="none"
            strokeDasharray="0"
            fill="#fefefe"
          ></rect>
          <g
            id="SvgjsG1781"
            className="apexcharts-yaxis"
            rel="0"
            transform="translate(292, 0)"
          >
            <g id="SvgjsG1783" className="apexcharts-yaxis-texts-g"></g>
          </g>
          <g id="SvgjsG1782" className="apexcharts-annotations"></g>
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
