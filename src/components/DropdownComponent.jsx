import React from "react";
import { Dropdown } from "../ui-lib/lib";
import {categories} from "../data"

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <li className="dropdown">
        Menu
        <ul className="dropdown_menu">
          {categories.map(({name},k) => (
            <li key={k}>
            <a href={`${name.replace(/\s/g, "")}`}>{name}</a>
          </li>
          ))}
        </ul>
      </li>
    </Dropdown>
  );
};
