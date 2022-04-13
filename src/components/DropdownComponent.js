/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "../ui-lib/lib";

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <li className="dropdown">
        Menu
        <ul className="dropdown_menu">
          <li>
            <a href="/SVG">SVG</a>
          </li>
          <li>
            <a href="/ChartBasic">ChartBasic</a>
          </li>
          <li>
            <a href="/LineChart">LineChart</a>
          </li>
          <li>
            <a href="/BarChart">BarChart</a>
          </li>
          <li>
            <a href="/HeatMap">HeatMap</a>
          </li>
          <li>
            <a href="/InteractiveChart">InteractiveChart</a>
          </li>
        </ul>
      </li>
    </Dropdown>
  );
};
