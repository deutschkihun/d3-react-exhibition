/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "../ui-lib/lib";

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <li className="dropdown">
        Dropdown
        <ul className="dropdown_menu">
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
          <li>
            <a href="#">Item 4</a>
          </li>
          <li>
            <a href="#">Item 5</a>
          </li>
        </ul>
      </li>
    </Dropdown>
  );
};
